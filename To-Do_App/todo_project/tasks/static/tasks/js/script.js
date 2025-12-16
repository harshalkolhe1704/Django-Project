function toggleComplete(taskId) {
    fetch(`/toggle/${taskId}/`, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                location.reload();
            }
        });
}