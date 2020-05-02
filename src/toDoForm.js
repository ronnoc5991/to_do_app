const createToDoForm = () => {

    const wrapper = document.querySelector('.wrapper');
    const form = wrapper.querySelectorAll('.form');
    const submitInput = form[0].querySelector('input[type="submit"]');

    function getFormData(e) {

        e.preventDefault();

        var formData = new FormData(form[0]);

        var title = formData.get('toDoTitle')
        // alert(formData.get('toDoTitle'));

        var description = formData.get('toDoDescription');
        // alert(formData.get('toDoDescription'));

        var date = formData.get('toDoDate');
        // alert(formData.get('toDoDate'));

        return {title, description, date}

        // createNewItem(title, description, date);
    }

    document.addEventListener('DOMContentLoaded', function(){
        submitInput.addEventListener('click', getFormData, false);
    }, false);

}

export default createToDoForm