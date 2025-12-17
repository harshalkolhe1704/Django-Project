function toggleComplete(taskId) {
    // provide optimistic UI feedback
    const el = document.querySelector(`#task-${taskId}`);
    if (el) el.classList.toggle('completed');
    fetch(`/toggle/${taskId}/`, { method: 'POST', headers: {'X-Requested-With': 'XMLHttpRequest'} })
        .then(response => response.json())
        .then(data => {
            if(!data.success) {
                if (el) el.classList.toggle('completed');
            }
        }).catch(()=>{ if (el) el.classList.toggle('completed'); });
}

// small UI helper for forms
document.addEventListener('DOMContentLoaded', ()=>{
    const forms = document.querySelectorAll('form');
    forms.forEach(f => f.addEventListener('submit', ()=>{
        const btn = f.querySelector('button[type="submit"]');
        if (btn) { btn.disabled = true; btn.textContent = 'Saving...'; }
    }));
});