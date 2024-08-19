document.addEventListener("DOMContentLoaded", () => {
    let selectedAcademic = null;
    let selectedWork = null;

    const academicList = document.getElementById("academicList");
    const workList = document.getElementById("workList");

    document.getElementById("addAcademic").addEventListener("click", () => {
        const newAcademic = prompt("Ingrese nuevo elemento académico:");
        if (newAcademic) {
            const li = document.createElement("li");
            li.textContent = newAcademic;
            academicList.appendChild(li);
            selectAcademicHandler(li);
        }
    });

    document.getElementById("editAcademic").addEventListener("click", () => {
        if (selectedAcademic) {
            const updatedAcademic = prompt("Modificar elemento académico:", selectedAcademic.textContent);
            if (updatedAcademic) {
                selectedAcademic.textContent = updatedAcademic;
            }
        } else {
            alert("No ha seleccionado ningún elemento académico para modificar.");
        }
    });

    document.getElementById("deleteAcademic").addEventListener("click", () => {
        if (selectedAcademic) {
            academicList.removeChild(selectedAcademic);
            selectedAcademic = null;
        } else {
            alert("No ha seleccionado ningún elemento académico para eliminar.");
        }
    });

    document.getElementById("addWork").addEventListener("click", () => {
        const newWork = prompt("Ingrese nuevo elemento laboral:");
        if (newWork) {
            const li = document.createElement("li");
            li.textContent = newWork;
            workList.appendChild(li);
            selectWorkHandler(li);
        }
    });

    document.getElementById("editWork").addEventListener("click", () => {
        if (selectedWork) {
            const updatedWork = prompt("Modificar elemento laboral:", selectedWork.textContent);
            if (updatedWork) {
                selectedWork.textContent = updatedWork;
            }
        } else {
            alert("No ha seleccionado ningún elemento laboral para modificar.");
        }
    });

    document.getElementById("deleteWork").addEventListener("click", () => {
        if (selectedWork) {
            workList.removeChild(selectedWork);
            selectedWork = null;
        } else {
            alert("No ha seleccionado ningún elemento laboral para eliminar.");
        }
    });

    function selectAcademicHandler(item) {
        item.addEventListener("click", () => {
            selectedAcademic = item;
        });
    }

    function selectWorkHandler(item) {
        item.addEventListener("click", () => {
            selectedWork = item;
        });
    }

    document.querySelectorAll("#academicList li").forEach(selectAcademicHandler);
    document.querySelectorAll("#workList li").forEach(selectWorkHandler);
});
