export function showProject() {
    console.log('in original');
}
export function updateProject() {
    showProject = function () {
        console.log('in updated');
    }
}
