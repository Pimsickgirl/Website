document.addEventListener("DOMContentLoaded", function () {
    // ดึงค่าจำนวนยอดเข้าชมจาก localStorage ถ้ามี
    let visitCount = localStorage.getItem("visitCount") || 0;

    // นับจำนวนเข้าชม
    visitCount = parseInt(visitCount) + 1;

    // บันทึกจำนวนเข้าชมใหม่ลงใน localStorage
    localStorage.setItem("visitCount", visitCount);

    // แสดงจำนวนเข้าชมใน span ที่มี id เป็น "count"
    document.getElementById("count").innerText = visitCount;
});

document.addEventListener("DOMContentLoaded", function () {
    var visitCountElement = document.getElementById("visitCount");
    var countElement = document.getElementById("count");

    setInterval(function () {
        // สุ่มสี
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        // เปลี่ยนสีข้อความ "Total Visits: "
        visitCountElement.style.color = randomColor;

        // เปลี่ยนสีตัวเลขที่แสดงจำนวนเข้าชม
        countElement.style.color = randomColor;
    }, 1000); // อัพเดททุก (1 วินาที)
});

function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
};

function showCurrentTime() {
    var currentTimeElement = document.getElementById("current-time");

    setInterval(function () {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        var currentTimeString = hours + ":" + minutes + ":" + seconds;
        currentTimeElement.innerText = "เวลาปัจจุบัน: " + currentTimeString;
    }, 1000); // อัพเดททุก (1 วินาที)
}

// เรียกใช้ฟังก์ชัน openModal เมื่อหน้าเว็บโหลดเสร็จ
window.onload = function () {
    openModal();
    showCurrentTime();
};
