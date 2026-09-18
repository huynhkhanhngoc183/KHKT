// Trạng thái
let daThich = false;
let tongLuotThich = 1562;

// Các phần tử giao diện
nutThich = document.getElementById('like-button');
nutBinhLuan = document.getElementById('comment-button');
nutChiaSe = document.getElementById('share-button');
nutBaoCao = document.getElementById('report-button');
khuVucBinhLuan = document.getElementById('comment-box');
oNhapBinhLuan = document.getElementById('input-comment');
nutGuiBinhLuan = document.getElementById('send-btn');
hienThiBinhLuan = document.getElementById('comments-display');
hienThiTongThich = document.getElementById('like-total');

// Các cửa sổ thông báo
cuaSoBaiHoc = document.getElementById('lesson-popup');
cuaSoCanhBaoChiaSe = document.getElementById('share-alert');
cuaSoBaoCaoThanhCong = document.getElementById('report-done');
nutDongBaiHoc = document.getElementById('close-lesson');
nutHuyChiaSe = document.getElementById('cancel-share');
nutVanChiaSe = document.getElementById('confirm-share');
nutDongBaoCao = document.getElementById('close-report');

// === XỬ LÝ SỰ KIỆN ===

// Nút Thích
nutThich.addEventListener('click', function() {
    daThich = !daThich;
    if (daThich) {
        nutThich.classList.add('liked');
        nutThich.querySelector('.icon').textContent = '💙';
        nutThich.querySelector('.text-btn').textContent = 'Đã Thích';
        tongLuotThich++;
    } else {
        nutThich.classList.remove('liked');
        nutThich.querySelector('.icon').textContent = '❤️';
        nutThich.querySelector('.text-btn').textContent = 'Thích';
        tongLuotThich--;
    }
    hienThiTongThich.innerHTML = '❤️ ' + tongLuotThich.toLocaleString() + ' Thích';
});

// Nút Bình luận — hiện/ẩn khung bình luận
nutBinhLuan.addEventListener('click', function() {
    khuVucBinhLuan.classList.toggle('hidden');
});

// Gửi bình luận
nutGuiBinhLuan.addEventListener('click', function() {
    let noiDung = oNhapBinhLuan.value.trim();
    if (noiDung) {
        let binhLuanMoi = document.createElement('div');
        binhLuanMoi.className = 'comment my-comment';
        binhLuanMoi.innerHTML = '<strong>Bạn:</strong> ' + noiDung;
        hienThiBinhLuan.appendChild(binhLuanMoi);
        oNhapBinhLuan.value = '';
        setTimeout(function() {
            cuaSoBaiHoc.classList.remove('hidden');
        }, 600);
    }
});

// Nút Chia sẻ — hiện cảnh báo
nutChiaSe.addEventListener('click', function() {
    cuaSoCanhBaoChiaSe.classList.remove('hidden');
});

// Nút Báo cáo — hiện xác nhận
nutBaoCao.addEventListener('click', function() {
    cuaSoBaoCaoThanhCong.classList.remove('hidden');
});

// Đóng cửa sổ bài học
nutDongBaiHoc.addEventListener('click', function() {
    cuaSoBaiHoc.classList.add('hidden');
});

// Hủy chia sẻ
nutHuyChiaSe.addEventListener('click', function() {
    cuaSoCanhBaoChiaSe.classList.add('hidden');
    cuaSoBaiHoc.classList.remove('hidden');
});

// Vẫn chia sẻ
nutVanChiaSe.addEventListener('click', function() {
    cuaSoCanhBaoChiaSe.classList.add('hidden');
    alert('⚠️ Bạn đã chia sẻ bài viết này!\n\n💡 Hãy nhớ: Mỗi chia sẻ đều có ảnh hưởng. Lần sau hãy kiểm chứng trước khi chia sẻ nhé!');
});

// Đóng thông báo báo cáo thành công
nutDongBaoCao.addEventListener('click', function() {
    cuaSoBaoCaoThanhCong.classList.add('hidden');
});

// Đóng cửa sổ khi nhấp ra ngoài
[cuaSoBaiHoc, cuaSoCanhBaoChiaSe, cuaSoBaoCaoThanhCong].forEach(function(cuaSo) {
    cuaSo.addEventListener('click', function(e) {
        if (e.target === cuaSo) {
            cuaSo.classList.add('hidden');
        }
    });
});
