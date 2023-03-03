function renderList(studentList) {
    var contentHTML = '';

    for (let i = 0; i < studentList.length; i++) {
        contentHTML += `
            <tr>
              <td>${studentList[i].ma}</td>
              <td>${studentList[i].ten}</td>
              <td>${studentList[i].email}</td>
              <td>${studentList[i].getDTB}</td>
              <td><button onclick="xoaSV('${studentList[i].ma}')" class="btn btn-danger">Xoá</button></td>
              <td><button onclick="suaSV('${studentList[i].ma}')" class="btn btn-danger">Sửa</button></td>
            </tr>
            `;
    }
    document.getElementById('tbodySinhVien').innerHTML = contentHTML;
}

function getInfo() {
    var ma = document.getElementById('txtMaSV').value;
    var ten = document.getElementById('txtTenSV').value;
    var email = document.getElementById('txtEmail').value;
    var matKhau = document.getElementById('txtPass').value;
    var toan = document.getElementById('txtDiemToan').value * 1;
    var ly = document.getElementById('txtDiemLy').value * 1;
    var hoa = document.getElementById('txtDiemHoa').value * 1;
    return {
        ma: ma,
        ten: ten,
        email: email,
        matKhau: matKhau,
        toan: toan,
        ly: ly,
        hoa: hoa,
    };
}

function showInfoToForm(student) {
    document.getElementById('txtMaSV').value = student.ma;
    document.getElementById('txtTenSV').value = student.ten;
    document.getElementById('txtEmail').value = student.email;
    document.getElementById('txtPass').value = student.matKhau;
    document.getElementById('txtDiemToan').value = student.toan;
    document.getElementById('txtDiemLy').value = student.ly;
    document.getElementById('txtDiemHoa').value = student.hoa;
}


function onLoading() {
    document.getElementById('loading').style.display = 'flex';
}

function offLoading() {
    document.getElementById('loading').style.display = 'none';
}