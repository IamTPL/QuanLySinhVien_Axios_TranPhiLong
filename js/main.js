var BASE_URL = 'https://63fa2871897af748dcca361f.mockapi.io';

// Loading page

function start() {
    fetchStudentList(renderList);
}

function fetchStudentList(renderList) {
    axios({
        url: `${BASE_URL}/sv`,
        method: 'GET',
    })
        .then((res) => {
            res.data.forEach((e) => {
                e.getDTB = Math.round((e.toan + e.ly + e.hoa) / 3);
            });
            renderList(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

start();

function themSV() {
    onLoading();
    axios({
        url: `${BASE_URL}/sv`,
        method: 'POST',
        data: getInfo(),
    })
        .then((res) => {
            fetchStudentList(renderList);
            resetForm();
            offLoading();
        })
        .catch((err) => {
            console.log(err);
        });
}

function xoaSV(id) {
    onLoading();
    axios({
        url: `${BASE_URL}/sv/${id}`,
        method: 'DELETE',
    })
        .then(() => {
            fetchStudentList(renderList);
            offLoading();
        })
        .catch((err) => {
            console.log(err);
            offLoading();
        });
}

function suaSV(id) {
    onLoading();
    axios({
        url: `${BASE_URL}/sv/${id}`,
        method: 'GET',
        data: getInfo(),
    })
        .then((res) => {
            showInfoToForm(res.data);
            offLoading();
        })
        .catch((err) => {
            console.log(err);
            offLoading();
        });
}

function capNhatSv() {
    onLoading();
    var student = getInfo();
    axios({
        url: `${BASE_URL}/sv/${student.ma}`,
        method: 'PUT',
        data: student,
    })
        .then(() => {
            fetchStudentList(renderList);
            offLoading();
        })
        .catch((err) => {
            console.log(err);
            offLoading();
        });
}

document.getElementById('btnSearch').onclick = function () {
    nameToSearch = document.getElementById('txtSearch').value;
    axios({
        url: `${BASE_URL}/sv`,
        method: 'GET',
    })
        .then((res) => {
            var listFindByName = res.data.filter((e) => {
                return e.ten.toLowerCase().includes(nameToSearch);
            });
            res.data.forEach((e) => {
                e.getDTB = Math.round((e.toan + e.ly + e.hoa) / 3);
            });
            renderList(listFindByName);
        })
        .catch((err) => {
            console.log(err);
        });
};

function resetForm() {
    document.getElementById('formQLSV').reset();
}
