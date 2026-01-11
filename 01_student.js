
/* =========================================================
   APP CODE (khởi động chỉ khi đã đăng nhập)
   ========================================================= */
if(!window.__USER){
  // chưa đăng nhập -> không chạy app
} else {

/* =========================================================
   0) BÀI HỌC + LỘ TRÌNH (mở khóa khi PASS)
   ========================================================= */
document.body.classList.add('mode-student');

const LESSONS = [
{
    id:"I1",
    level:"easy",
    title:"I1 — Nhập họ tên và năm sinh của học sinh, in ra câu chào.",
    short:"Nhập họ tên và năm sinh của học sinh, in ra câu chào.",
    skill:"input, print",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập họ tên và năm sinh của học sinh, in ra câu chào.",
    sampleIn:"Nguyễn Văn A\n2008",
    sampleOut:"",
    tests:[{stdin:"Nguyễn Văn A
2008", expected:""}],
    scaffold:`# I1: Nhập họ tên và năm sinh của học sinh, in ra câu chào.
# Nhập họ tên và năm sinh của học sinh, in ra câu chào.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"ho_ten = input()\nnam_sinh = int(input())\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"ho_ten = input()\nnam_sinh = int(input())\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"ho_ten = input()\nnam_sinh = int(input())\nprint(\"Chào bạn\", ho_ten)\n"}]
  },
{
    id:"I2",
    level:"easy",
    title:"I2 — Nhập hai số nguyên, in ra:",
    short:"Nhập hai số nguyên, in ra:",
    skill:"input, print",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập hai số nguyên, in ra:\nTổng\nHiệu\nTích\nThương (lấy phần nguyên)",
    sampleIn:"3 5",
    sampleOut:"",
    tests:[{stdin:"3 5", expected:""}],
    scaffold:`# I2: Nhập hai số nguyên, in ra:
# Nhập hai số nguyên, in ra:
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"a = int(input())\nb = int(input())\ntong= ...\nhieu= ...\ntich= ...\nthuong_nguyen= ...\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"a = int(input())\nb = int(input())\ntong= ___\nhieu= ___\ntich= ___\nthuong_nguyen= ___\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"a = int(input())\nb = int(input())\ntong = a + b\nhieu = a - b\ntich = a * b\nthuong_nguyen = a // b\nprint(\"Tổng là:\", tong)\nprint(\"Hiệu là:\", hieu)\nprint(\"Tích là:\", tich)\nprint(\"Thương (lấy phần nguyên) là:\", thuong_nguyen)\n"}]
  },
{
    id:"I3",
    level:"easy",
    title:"I3 — Nhập chiều dài và chiều rộng hình chữ nhật, tính và in:",
    short:"Nhập chiều dài và chiều rộng hình chữ nhật, tính và in:",
    skill:"input, print",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập chiều dài và chiều rộng hình chữ nhật, tính và in:\nChu vi\nDiện tích",
    sampleIn:"5 3",
    sampleOut:"",
    tests:[{stdin:"5 3", expected:""}],
    scaffold:`# I3: Nhập chiều dài và chiều rộng hình chữ nhật, tính và in:
# Nhập chiều dài và chiều rộng hình chữ nhật, tính và in:
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"dai = float(input())\nrong = float(input())\nchu_vi= ...\ndien_tich= ...\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"dai = float(input())\nrong = float(input())\nchu_vi= ___\ndien_tich= ___\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"dai = float(input())\nrong = float(input())\nchu_vi = (dai + rong) * 2\ndien_tich = dai * rong\nprint(\"--- Kết quả hình chữ nhật ---\")\nprint(f\"Chu vi hình chữ nhật là: {chu_vi} (đơn vị độ dài)\")\nprint(f\"Diện tích hình chữ nhật là: {dien_tich} (đơn vị diện tích)\")\n"}]
  },
{
    id:"I4",
    level:"easy",
    title:"I4 — Nhập điểm Toán, Văn, Anh. Tính điểm trung bình và in kết quả",
    short:"Nhập điểm Toán, Văn, Anh. Tính điểm trung bình và in kết quả",
    skill:"input, print",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập điểm Toán, Văn, Anh. Tính điểm trung bình và in kết quả",
    sampleIn:"8 7 9",
    sampleOut:"",
    tests:[{stdin:"8 7 9", expected:""}],
    scaffold:`# I4: Nhập điểm Toán, Văn, Anh. Tính điểm trung bình và in kết quả
# Nhập điểm Toán, Văn, Anh. Tính điểm trung bình và in kết quả
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"toan = float(input())\nvan = float(input())\nanh = float(input())\ndiem_tb= ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"toan = float(input())\nvan = float(input())\nanh = float(input())\ndiem_tb= ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"toan = float(input())\nvan = float(input())\nanh = float(input())\n\ndiem_tb = (toan + van + anh) / 3\n\nprint(f\"Điểm bạn là: { diem_tb }\")\n"}]
  },
{
    id:"II1",
    level:"easy",
    title:"II1 — Nhập một số nguyên, kiểm tra số đó là chẵn hay lẻ.",
    short:"Nhập một số nguyên, kiểm tra số đó là chẵn hay lẻ.",
    skill:"if",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập một số nguyên, kiểm tra số đó là chẵn hay lẻ.",
    sampleIn:"7",
    sampleOut:"",
    tests:[{stdin:"7", expected:""}],
    scaffold:`# II1: Nhập một số nguyên, kiểm tra số đó là chẵn hay lẻ.
# Nhập một số nguyên, kiểm tra số đó là chẵn hay lẻ.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\nif n % 2 == 0:\n    ...\nelse:\n    ...\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\nif ___:\n    ___\nelse:\n    ___\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\nif n % 2 == 0:\n    print(f\"{n} là số chẵn.\")\nelse:\n    print(f\"{n} là số lẻ.\")\n"}]
  },
{
    id:"II2",
    level:"easy",
    title:"II2 — Nhập điểm kiểm tra (0–10), xếp loại:",
    short:"Nhập điểm kiểm tra (0–10), xếp loại:",
    skill:"if",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập điểm kiểm tra (0–10), xếp loại:\nGiỏi (≥8)\nKhá (6.5–7.9)\nTrung bình (5–6.4)\nYếu (<5)",
    sampleIn:"7.5",
    sampleOut:"",
    tests:[{stdin:"7.5", expected:""}],
    scaffold:`# II2: Nhập điểm kiểm tra (0–10), xếp loại:
# Nhập điểm kiểm tra (0–10), xếp loại:
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"diem = float(input())\nif diem >= 8.0:\n    ...\nelif diem >= 6.5:\n    ...\nelif diem >= 5.0:\n    ...\nelse:\n    ...\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"diem = float(input())\nif ___:\n    ___\nelif ___:\n    ___\nelif ___:\n    ___\nelse:\n    ___\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"diem = float(input())\n\nif diem >= 8.0:\n    print(\"Xếp loại: Giỏi\")\nelif diem >= 6.5:\n    print(\"Xếp loại: Khá\")\nelif diem >= 5.0:\n    print(\"Xếp loại: Trung bình\")\nelse:\n    print(\"Xếp loại: Yếu\")\n"}]
  },
{
    id:"II3",
    level:"easy",
    title:"II3 — Nhập ba số thực, kiểm tra có thể tạo thành tam giác hay không.",
    short:"Nhập ba số thực, kiểm tra có thể tạo thành tam giác hay khôn...",
    skill:"if",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập ba số thực, kiểm tra có thể tạo thành tam giác hay không.",
    sampleIn:"3 4 5",
    sampleOut:"",
    tests:[{stdin:"3 4 5", expected:""}],
    scaffold:`# II3: Nhập ba số thực, kiểm tra có thể tạo thành tam giác hay không.
# Nhập ba số thực, kiểm tra có thể tạo thành tam giác hay không.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"a = float(input())\nb = float(input())\nc = float(input())\nif (a + b > c) and (a + c > b) and (b + c > a):\n    ...\nelse:\n    ...\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"a = float(input())\nb = float(input())\nc = float(input())\nif ___:\n    ___\nelse:\n    ___\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"a = float(input())\nb = float(input())\nc = float(input())\nif (a + b > c) and (a + c > b) and (b + c > a):\n    print(\"Ba số này có thể tạo thành một tam giác.\")\nelse:\n    print(\"Ba số này KHÔNG thể tạo thành tam giác.\")\n"}]
  },
{
    id:"II4",
    level:"easy",
    title:"II4 — Nhập số điện tiêu thụ (kWh), tính tiền điện theo bậc (tự cho đơn giản 2–3 mức).",
    short:"Nhập số điện tiêu thụ (kWh), tính tiền điện theo bậc (tự cho...",
    skill:"if",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập số điện tiêu thụ (kWh), tính tiền điện theo bậc (tự cho đơn giản 2–3 mức).",
    sampleIn:"60",
    sampleOut:"",
    tests:[{stdin:"60", expected:""}],
    scaffold:`# II4: Nhập số điện tiêu thụ (kWh), tính tiền điện theo bậc (tự cho đơn giản 2–3 mức).
# Nhập số điện tiêu thụ (kWh), tính tiền điện theo bậc (tự cho đơn giản 2–3 mức).
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"so_dien = float(input())\nif so_dien <= 50:\n    ...\ntien_dien= ...\nelse:\n    ...\ntien_dien= ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"so_dien = float(input())\nif ___:\n    ___\ntien_dien= ___\nelse:\n    ___\ntien_dien= ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"so_dien = float(input())\n\nif so_dien <= 50:\n    tien_dien = so_dien * 1600\nelse:\n    tien_dien = (50 * 1600) + (so_dien - 50) * 2000\nprint(f\"Số tiền điện phải trả là: {tien_dien:,} VNĐ\")\n"}]
  },
{
    id:"III1",
    level:"easy",
    title:"III1 — In ra các số từ 1 đến n (n nhập từ bàn phím).",
    short:"In ra các số từ 1 đến n (n nhập từ bàn phím).",
    skill:"for",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"In ra các số từ 1 đến n (n nhập từ bàn phím).",
    sampleIn:"10",
    sampleOut:"",
    tests:[{stdin:"10", expected:""}],
    scaffold:`# III1: In ra các số từ 1 đến n (n nhập từ bàn phím).
# In ra các số từ 1 đến n (n nhập từ bàn phím).
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\nfor i in range(1, n + 1):\n    ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\nfor ___:\n    ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\nfor i in range(1, n + 1):\n    print(i, end=\" \")\n"}]
  },
{
    id:"III2",
    level:"easy",
    title:"III2 — Tính tổng các số chẵn từ 1 đến n.",
    short:"Tính tổng các số chẵn từ 1 đến n.",
    skill:"for",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Tính tổng các số chẵn từ 1 đến n.",
    sampleIn:"10",
    sampleOut:"",
    tests:[{stdin:"10", expected:""}],
    scaffold:`# III2: Tính tổng các số chẵn từ 1 đến n.
# Tính tổng các số chẵn từ 1 đến n.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\ntong= ...\nfor i in range(1, n + 1):\n    ...\nif i % 2 == 0:\n    ...\ntong= ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\ntong= ___\nfor ___:\n    ___\nif ___:\n    ___\ntong= ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\ntong = 0\nfor i in range(1, n + 1):\n    if i % 2 == 0:\n        tong = tong + i\nprint(f\"Tổng các số chẵn từ 1 đến {n} là: {tong}\")\n"}]
  },
{
    id:"III3",
    level:"easy",
    title:"III3 — In bảng cửu chương của một số n.",
    short:"In bảng cửu chương của một số n.",
    skill:"for",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"In bảng cửu chương của một số n.",
    sampleIn:"7",
    sampleOut:"",
    tests:[{stdin:"7", expected:""}],
    scaffold:`# III3: In bảng cửu chương của một số n.
# In bảng cửu chương của một số n.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\nfor i in range(1, 11):\n    ...\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\nfor ___:\n    ___\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\nprint(f\"--- BẢNG CỬU CHƯƠNG {n} ---\")\nfor i in range(1, 11):\n    print(f\"{n} x {i} = {n * i}\")\n"}]
  },
{
    id:"III4",
    level:"easy",
    title:"III4 — Tính tổng:",
    short:"Tính tổng:",
    skill:"for",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Tính tổng:",
    sampleIn:"5",
    sampleOut:"",
    tests:[{stdin:"5", expected:""}],
    scaffold:`# III4: Tính tổng:
# Tính tổng:
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\nS= ...\nfor i in range(1, n + 1):\n    ...\nS= ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\nS= ___\nfor ___:\n    ___\nS= ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\nS = 0\nfor i in range(1, n + 1):\n    S = S + 1/i\n\nprint(f\"Tổng S = {round(S, 2)}\")\n"}]
  },
{
    id:"III5",
    level:"easy",
    title:"III5 — Đếm số chữ số của một số nguyên dương n (không dùng hàm len).",
    short:"Đếm số chữ số của một số nguyên dương n (không dùng hàm len)...",
    skill:"for",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Đếm số chữ số của một số nguyên dương n (không dùng hàm len).",
    sampleIn:"12345",
    sampleOut:"",
    tests:[{stdin:"12345", expected:""}],
    scaffold:`# III5: Đếm số chữ số của một số nguyên dương n (không dùng hàm len).
# Đếm số chữ số của một số nguyên dương n (không dùng hàm len).
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\ntam= ...\ndem= ...\nif tam == 0:\n    ...\ndem= ...\nelse:\n    ...\nwhile tam > 0:\n    ...\ndem= ...\ntam= ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\ntam= ___\ndem= ___\nif ___:\n    ___\ndem= ___\nelse:\n    ___\nwhile ___:\n    ___\ndem= ___\ntam= ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\ntam = n # Dùng biến tạm để không làm mất giá trị gốc của n\ndem = 0\n\nif tam == 0:\n    dem = 1\nelse:\n    while tam > 0:\n        dem = dem + 1\ntam = tam // 10 # Chia lấy phần nguyên để bỏ chữ số cuối cùng\n\nprint(f\"Số {n} có {dem} chữ số.\")\n"}]
  },
{
    id:"IV1",
    level:"medium",
    title:"IV1 — Nhập số nguyên n (>0), in các chữ số của n theo thứ tự ngược lại.",
    short:"Nhập số nguyên n (>0), in các chữ số của n theo thứ tự ngược...",
    skill:"while",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập số nguyên n (>0), in các chữ số của n theo thứ tự ngược lại.",
    sampleIn:"1234",
    sampleOut:"",
    tests:[{stdin:"1234", expected:""}],
    scaffold:`# IV1: Nhập số nguyên n (>0), in các chữ số của n theo thứ tự ngược lại.
# Nhập số nguyên n (>0), in các chữ số của n theo thứ tự ngược lại.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\nwhile n > 0:\n    ...\nchu_so= ...\nn= ...\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\nwhile ___:\n    ___\nchu_so= ___\nn= ___\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\nprint(\"Các chữ số theo thứ tự ngược lại là: \", end=\"\")\n\nwhile n > 0:\n    chu_so = n % 10  # Lấy chữ số cuối\nprint(chu_so, end=\"\")\nn = n // 10\n"}]
  },
{
    id:"IV2",
    level:"medium",
    title:"IV2 — Tính tổng các chữ số của một số nguyên dương.",
    short:"Tính tổng các chữ số của một số nguyên dương.",
    skill:"while",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Tính tổng các chữ số của một số nguyên dương.",
    sampleIn:"1234",
    sampleOut:"",
    tests:[{stdin:"1234", expected:""}],
    scaffold:`# IV2: Tính tổng các chữ số của một số nguyên dương.
# Tính tổng các chữ số của một số nguyên dương.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\ntong= ...\nwhile n > 0:\n    ...\nchu_so= ...\ntong= ...\nn= ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\ntong= ___\nwhile ___:\n    ___\nchu_so= ___\ntong= ___\nn= ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\ntong = 0\n\nwhile n > 0:\n    chu_so = n % 10\ntong = tong + chu_so\nn = n // 10\n\nprint(f\"Tổng các chữ số là: {tong}\")\n"}]
  },
{
    id:"IV3",
    level:"medium",
    title:"IV3 — Nhập các số liên tiếp cho đến khi nhập số 0 thì dừng, tính tổng các số đã nhập.",
    short:"Nhập các số liên tiếp cho đến khi nhập số 0 thì dừng, tính t...",
    skill:"while",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập các số liên tiếp cho đến khi nhập số 0 thì dừng, tính tổng các số đã nhập.\ntong = 0",
    sampleIn:"5\n7\n-2\n0",
    sampleOut:"",
    tests:[{stdin:"5
7
-2
0", expected:""}],
    scaffold:`# IV3: Nhập các số liên tiếp cho đến khi nhập số 0 thì dừng, tính tổng các số đã nhập.
# Nhập các số liên tiếp cho đến khi nhập số 0 thì dừng, tính tổng các số đã nhập.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"so = int(input())\nso = int(input())\nwhile so != 0:\n    ...\ntong= ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"so = int(input())\nso = int(input())\nwhile ___:\n    ___\ntong= ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"so = int(input())\n\nwhile so != 0:\n    tong = tong + so\nso = int(input())\n\nprint(f\"Tổng các số đã nhập là: {tong}\")\n"}]
  },
{
    id:"IV4",
    level:"medium",
    title:"IV4 — Kiểm tra một số nguyên dương có phải là số đối xứng hay không.",
    short:"Kiểm tra một số nguyên dương có phải là số đối xứng hay khôn...",
    skill:"while",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Kiểm tra một số nguyên dương có phải là số đối xứng hay không.",
    sampleIn:"12321",
    sampleOut:"",
    tests:[{stdin:"12321", expected:""}],
    scaffold:`# IV4: Kiểm tra một số nguyên dương có phải là số đối xứng hay không.
# Kiểm tra một số nguyên dương có phải là số đối xứng hay không.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\nso_ban_dau= ...\nso_dao_nguoc= ...\nwhile n > 0:\n    ...\nchu_so= ...\nso_dao_nguoc= ...\nn= ...\nif so_ban_dau == so_dao_nguoc:\n    ...\nelse:\n    ...\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\nso_ban_dau= ___\nso_dao_nguoc= ___\nwhile ___:\n    ___\nchu_so= ___\nso_dao_nguoc= ___\nn= ___\nif ___:\n    ___\nelse:\n    ___\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\nso_ban_dau = n\nso_dao_nguoc = 0\n\nwhile n > 0:\n    chu_so = n % 10\n# Công thức tạo số đảo ngược: nhân 10 số cũ và cộng chữ số mới\nso_dao_nguoc = so_dao_nguoc * 10 + chu_so\nn = n // 10\n\nif so_ban_dau == so_dao_nguoc:\n    print(f\"{so_ban_dau} là số đối xứng.\")\nelse:\n    print(f\"{so_ban_dau} KHÔNG phải là số đối xứng.\")\n"}]
  },
{
    id:"V1",
    level:"medium",
    title:"V1 — Nhập danh sách n số nguyên, in ra:",
    short:"Nhập danh sách n số nguyên, in ra:",
    skill:"list",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập danh sách n số nguyên, in ra:\nDanh sách\nGiá trị lớn nhất\nGiá trị nhỏ nhất",
    sampleIn:"5\n1\n9\n3\n7\n2",
    sampleOut:"",
    tests:[{stdin:"5
1
9
3
7
2", expected:""}],
    scaffold:`# V1: Nhập danh sách n số nguyên, in ra:
# Nhập danh sách n số nguyên, in ra:
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\n    so = int(input(f\"Nhập phần tử thứ {i+1}: \"))\na= ...\nfor i in range(n):\n    ...\na.append(so) # Thêm số vừa nhập vào danh sách\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\n    so = int(input(f\"Nhập phần tử thứ {i+1}: \"))\na= ___\nfor ___:\n    ___\na.append(so) # Thêm số vừa nhập vào danh sách\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\na = [] # Khởi tạo danh sách rỗng\n\nfor i in range(n):\n    so = int(input(f\"Nhập phần tử thứ {i+1}: \"))\na.append(so) # Thêm số vừa nhập vào danh sách\n\nprint(\"Danh sách vừa nhập là:\", a)\nprint(\"Giá trị lớn nhất là:\", max(a))\nprint(\"Giá trị nhỏ nhất là:\", min(a))\n"}]
  },
{
    id:"V2",
    level:"medium",
    title:"V2 — Tính tổng và trung bình các phần tử trong danh sách.",
    short:"Tính tổng và trung bình các phần tử trong danh sách.",
    skill:"list",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Tính tổng và trung bình các phần tử trong danh sách.",
    sampleIn:"5\n1\n2\n3\n4\n5",
    sampleOut:"",
    tests:[{stdin:"5
1
2
3
4
5", expected:""}],
    scaffold:`# V2: Tính tổng và trung bình các phần tử trong danh sách.
# Tính tổng và trung bình các phần tử trong danh sách.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Nhập n và n số nguyên.\n# Bước 2: Tính tổng (sum) và trung bình (tong/len).\n# Bước 3: In ra kết quả."}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\na = []\nfor i in range(n):\n    a.append(int(input()))\n\ntong = sum(a)\ntrung_binh = tong / len(a)\nprint(tong)\nprint(trung_binh)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\na = []\nfor i in range(___):\n    a.append(int(___))\n\ntong = sum(a)\ntrung_binh = tong / len(a)\nprint(___)\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\na = []\nfor i in range(n):\n    a.append(int(input()))\n\ntong = sum(a)\ntrung_binh = tong / len(a)\nprint(f\"Tổng các phần tử: {tong}\")\nprint(f\"Trung bình cộng: {trung_binh}\")\n"}]
  },
{
    id:"V3",
    level:"medium",
    title:"V3 — Đếm số phần tử chẵn và lẻ trong danh sách.",
    short:"Đếm số phần tử chẵn và lẻ trong danh sách.",
    skill:"list",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Đếm số phần tử chẵn và lẻ trong danh sách.\ndem_chan = 0\ndem_le = 0\nfor x in a:\nif x % 2 == 0:\ndem_chan += 1\nelse:\ndem_le += 1\nprint(f\"Số lượng số chẵn: {dem_chan}\")\nprint(f\"Số lượng số lẻ: {dem_le}\")",
    sampleIn:"5\n1\n2\n3\n4\n5",
    sampleOut:"",
    tests:[{stdin:"5
1
2
3
4
5", expected:""}],
    scaffold:`# V3: Đếm số phần tử chẵn và lẻ trong danh sách.
# Đếm số phần tử chẵn và lẻ trong danh sách.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Nhập n và danh sách a.\n# Bước 2: Duyệt từng phần tử, dùng x % 2 để đếm chẵn/lẻ.\n# Bước 3: In ra số lượng chẵn và lẻ."}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\na = []\nfor i in range(n):\n    a.append(int(input()))\n\ndem_chan = 0\ndem_le = 0\nfor x in a:\n    if x % 2 == 0:\n        dem_chan += 1\n    else:\n        dem_le += 1\nprint(dem_chan)\nprint(dem_le)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\na = []\nfor i in range(___):\n    a.append(int(___))\n\ndem_chan = 0\ndem_le = 0\nfor x in a:\n    if x % 2 == 0:\n        dem_chan += 1\n    else:\n        dem_le += 1\nprint(___)\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\na = []\nfor i in range(n):\n    a.append(int(input()))\n\ndem_chan = 0\ndem_le = 0\nfor x in a:\n    if x % 2 == 0:\n        dem_chan += 1\n    else:\n        dem_le += 1\nprint(f\"Số lượng số chẵn: {dem_chan}\")\nprint(f\"Số lượng số lẻ: {dem_le}\")\n"}]
  },
{
    id:"V4",
    level:"medium",
    title:"V4 — Tìm vị trí xuất hiện đầu tiên của một số x trong danh sách.",
    short:"Tìm vị trí xuất hiện đầu tiên của một số x trong danh sách.",
    skill:"list",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Tìm vị trí xuất hiện đầu tiên của một số x trong danh sách.",
    sampleIn:"5\n1\n2\n2\n3\n2\n2",
    sampleOut:"",
    tests:[{stdin:"5
1
2
2
3
2
2", expected:""}],
    scaffold:`# V4: Tìm vị trí xuất hiện đầu tiên của một số x trong danh sách.
# Tìm vị trí xuất hiện đầu tiên của một số x trong danh sách.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Nhập n, danh sách a và số x.\n# Bước 2: Duyệt danh sách, gặp x lần đầu thì lưu vị trí và dừng.\n# Bước 3: In vị trí hoặc thông báo không tìm thấy."}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\na = []\nfor i in range(n):\n    a.append(int(input()))\n\nx = int(input())\nvi_tri = -1\nfor i in range(n):\n    if a[i] == x:\n        vi_tri = i\n        break\nprint(vi_tri)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\na = []\nfor i in range(___):\n    a.append(int(___))\n\nx = int(input())\nvi_tri = -1\nfor i in range(n):\n    if a[i] == x:\n        vi_tri = i\n        break\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\na = []\nfor i in range(n):\n    a.append(int(input()))\n\nx = int(input())\nvi_tri = -1\nfor i in range(n):\n    if a[i] == x:\n        vi_tri = i\n        break\n\nif vi_tri != -1:\n    print(f\"Vị trí xuất hiện đầu tiên của {x} là: {vi_tri}\")\nelse:\n    print(f\"Không tìm thấy {x} trong danh sách.\")\n"}]
  },
{
    id:"V5",
    level:"medium",
    title:"V5 — Sắp xếp danh sách theo thứ tự tăng dần không dùng hàm sort().",
    short:"Sắp xếp danh sách theo thứ tự tăng dần không dùng hàm sort()...",
    skill:"list",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Sắp xếp danh sách theo thứ tự tăng dần không dùng hàm sort().",
    sampleIn:"5\n3\n1\n5\n2\n4",
    sampleOut:"",
    tests:[{stdin:"5
3
1
5
2
4", expected:""}],
    scaffold:`# V5: Sắp xếp danh sách theo thứ tự tăng dần không dùng hàm sort().
# Sắp xếp danh sách theo thứ tự tăng dần không dùng hàm sort().
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Nhập n và danh sách a.\n# Bước 2: Sắp xếp tăng dần (không dùng sort) bằng 2 vòng lặp.\n# Bước 3: In ra danh sách sau khi sắp xếp."}, {d:"Tầng 2 — Khung lệnh", t:"n = int(input())\na = []\nfor i in range(n):\n    a.append(int(input()))\n\nfor i in range(n):\n    for j in range(0, n - i - 1):\n        if a[j] > a[j+1]:\n            a[j], a[j+1] = a[j+1], a[j]\nprint(a)\n"}, {d:"Tầng 3 — Điền khuyết", t:"n = int(input())\na = []\nfor i in range(___):\n    a.append(int(___))\n\nfor i in range(n):\n    for j in range(0, n - i - 1):\n        if a[j] > a[j+1]:\n            a[j], a[j+1] = a[j+1], a[j]\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"n = int(input())\na = []\nfor i in range(n):\n    a.append(int(input()))\n\n# Sắp xếp nổi bọt (Bubble Sort)\nfor i in range(n):\n    for j in range(0, n - i - 1):\n        if a[j] > a[j+1]:\n            a[j], a[j+1] = a[j+1], a[j]\n\nprint(\"Danh sách sau khi sắp xếp tăng dần là:\", a)\n"}]
  },
{
    id:"VI1",
    level:"medium",
    title:"VI1 — Nhập một xâu, in:",
    short:"Nhập một xâu, in:",
    skill:"string",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Nhập một xâu, in:\nĐộ dài xâu\nXâu viết hoa\nXâu viết thường",
    sampleIn:"Xin chao ban",
    sampleOut:"",
    tests:[{stdin:"Xin chao ban", expected:""}],
    scaffold:`# VI1: Nhập một xâu, in:
# Nhập một xâu, in:
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"s = input()\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"s = input()\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"s = input()\n\nprint(f\"Độ dài của xâu là: {len(s)}\")\nprint(f\"Xâu viết hoa: {s.upper()}\")\nprint(f\"Xâu viết thường: {s.lower()}\")\n"}]
  },
{
    id:"VI2",
    level:"medium",
    title:"VI2 — Đếm số ký tự là chữ cái trong xâu.",
    short:"Đếm số ký tự là chữ cái trong xâu.",
    skill:"string",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Đếm số ký tự là chữ cái trong xâu.",
    sampleIn:"Xin chao ban",
    sampleOut:"",
    tests:[{stdin:"Xin chao ban", expected:""}],
    scaffold:`# VI2: Đếm số ký tự là chữ cái trong xâu.
# Đếm số ký tự là chữ cái trong xâu.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"s = input()\ndem= ...\nfor char in s:\n    ...\nif char.isalpha():\n    ...\ndem += ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"s = input()\ndem= ___\nfor ___:\n    ___\nif ___:\n    ___\ndem += ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"s = input()\ndem = 0\nfor char in s:\n    if char.isalpha():\n        dem += 1\nprint(f\"Số lượng chữ cái trong xâu là: {dem}\")\n"}]
  },
{
    id:"VI3",
    level:"medium",
    title:"VI3 — Đếm số từ trong một xâu (các từ cách nhau bởi dấu cách).",
    short:"Đếm số từ trong một xâu (các từ cách nhau bởi dấu cách).",
    skill:"string",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Đếm số từ trong một xâu (các từ cách nhau bởi dấu cách).",
    sampleIn:"Xin chao cac ban",
    sampleOut:"",
    tests:[{stdin:"Xin chao cac ban", expected:""}],
    scaffold:`# VI3: Đếm số từ trong một xâu (các từ cách nhau bởi dấu cách).
# Đếm số từ trong một xâu (các từ cách nhau bởi dấu cách).
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"s = input()\ndanh_sach_tu= ...\nso_tu= ...\nprint(...)\n"}, {d:"Tầng 3 — Điền khuyết", t:"s = input()\ndanh_sach_tu= ___\nso_tu= ___\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"s = input()\n# split() không tham số sẽ tách theo mọi khoảng trắng\ndanh_sach_tu = s.split()\nso_tu = len(danh_sach_tu)\nprint(f\"Số từ trong xâu là: {so_tu}\")\n"}]
  },
{
    id:"VI4",
    level:"medium",
    title:"VI4 — Kiểm tra xâu có phải là xâu đối xứng hay không.",
    short:"Kiểm tra xâu có phải là xâu đối xứng hay không.",
    skill:"string",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Kiểm tra xâu có phải là xâu đối xứng hay không.",
    sampleIn:"abcba",
    sampleOut:"",
    tests:[{stdin:"abcba", expected:""}],
    scaffold:`# VI4: Kiểm tra xâu có phải là xâu đối xứng hay không.
# Kiểm tra xâu có phải là xâu đối xứng hay không.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Đọc input (nếu có)\n# Bước 2: Xử lý theo đề\n# Bước 3: In kết quả\n"}, {d:"Tầng 2 — Khung lệnh", t:"s = input()\ns_dao_nguoc= ...\nif s == s_dao_nguoc:\n    ...\nelse:\n    ...\nprint(...)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 3 — Điền khuyết", t:"s = input()\ns_dao_nguoc= ___\nif ___:\n    ___\nelse:\n    ___\nprint(___)\n# (Có thể in thêm theo yêu cầu đề bài)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"s = input()\n# Đảo ngược xâu\ns_dao_nguoc = s[::-1]\nif s == s_dao_nguoc:\n    print(\"Đây là xâu đối xứng.\")\nelse:\n    print(\"Đây KHÔNG phải là xâu đối xứng.\")\n"}]
  },
{
    id:"VI5",
    level:"medium",
    title:"VI5 — Chuẩn hóa xâu họ tên: loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ.",
    short:"Chuẩn hóa xâu họ tên: loại bỏ khoảng trắng thừa, viết hoa ch...",
    skill:"string",
    input:"Theo đề (nhập từ bàn phím)",
    output:"Theo yêu cầu đề bài",
    text:"Chuẩn hóa xâu họ tên: loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ.\nho_ten = input(\"Nhập họ tên cần chuẩn hóa: \")\n# Bước 1: Tách các từ (loại bỏ khoảng trắng thừa)\ncac_tu = ho_ten.split()\n# Bước 2: Nối lại bằng một dấu cách duy nhất\nxau_tam = \" \".join(cac_tu)\n# Bước 3: Viết hoa chữ cái đầu mỗi từ\nxau_chuan_hoa = xau_tam.title()\nprint(f\"Xâu sau khi chuẩn hóa: '{xau_chuan_hoa}'\")",
    sampleIn:"  nguyen   van    a  ",
    sampleOut:"",
    tests:[{stdin:"  nguyen   van    a  ", expected:""}],
    scaffold:`# VI5: Chuẩn hóa xâu họ tên: loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ.
# Chuẩn hóa xâu họ tên: loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ.
`,
    snips:[{d:"Tầng 1 — Định hướng", t:"# Bước 1: Nhập họ tên.\n# Bước 2: split() để bỏ khoảng trắng thừa.\n# Bước 3: ' '.join(...) rồi title() để viết hoa chữ cái đầu mỗi từ.\n# Bước 4: In kết quả."}, {d:"Tầng 2 — Khung lệnh", t:"ho_ten = input()\ncac_tu = ho_ten.split()\nxau_tam = \" \".join(cac_tu)\nxau_chuan = xau_tam.title()\nprint(xau_chuan)\n"}, {d:"Tầng 3 — Điền khuyết", t:"ho_ten = input()\ncac_tu = ho_ten.___()\nxau_tam = \" \".join(cac_tu)\nxau_chuan = xau_tam.___()\nprint(___)\n"}, {d:"Tầng 4 — Lời giải tham khảo", t:"ho_ten = input()\n# Bước 1: Tách các từ (loại bỏ khoảng trắng thừa)\ncac_tu = ho_ten.split()\n# Bước 2: Nối lại bằng một dấu cách duy nhất\nxau_tam = \" \".join(cac_tu)\n# Bước 3: Viết hoa chữ cái đầu mỗi từ\nxau_chuan_hoa = xau_tam.title()\nprint(f\"Xâu sau khi chuẩn hóa: '{xau_chuan_hoa}'\")\n"}]
  }
];

/* =========================================================
   1) STATE + STORAGE
   ========================================================= */
let current = LESSONS[0];
try{ window.LESSONS = LESSONS; window.current = current; }catch(e){}
let editor;
let pyodide = null;
let pyReady = false;
try{ window.pyReady = pyReady; }catch(e){}
let autoSuggest = true;

let suggestTimer = null;
let acTimer = null; // debounce autocomplete
let lastRunError = "";
let lastTestsResult = "";
let lastRunOrTestTs = 0;

// Focus mode
let focus = false;

// Think-Guard + Copilot-like
let thinkMode = true;
let guardStage = 1;
let acceptStreak = 0;
let lastManualTypeTs = Date.now();
let thinkScore = 0;

// Progress unlock per student (tách theo mã HS)
const user = window.__USER;
const PROG_KEY = `py10:progress:${user.id}`;
let progress = loadJSON(PROG_KEY, { unlocked: {A1:true, B1:true, C1:true}, passed: {}, passCount:0 });
try{ window.progress = progress; }catch(e){}

// Logging per student
const LOG_KEY = `py10:log:${user.id}`;
let logData = loadJSON(LOG_KEY, { events: [] });

// Assignments (teacher -> student)
const ASSIGN_KEY = "py10:assignments";
function getAssignments(){
  try{ return JSON.parse(localStorage.getItem(ASSIGN_KEY) || "[]") || []; }catch{ return []; }
}
function isDoneForAssignment(as){
  // done if lesson already PASS
  return !!progress.passed[as.lessonId];
}
function formatDate(iso){
  if(!iso) return "";
  try{
    const d = new Date(iso);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth()+1).padStart(2,"0");
    const dd = String(d.getDate()).padStart(2,"0");
    return `${dd}/${mm}/${yyyy}`;
  }catch{ return String(iso); }
}
function renderStudentTodo(){
  const box = document.getElementById("todoBox");
  const list = document.getElementById("todoList");
  if(!box || !list) return;

  // Lấy các bài giáo viên giao cho học sinh này (hoặc giao toàn lớp)
  const all = getAssignments().filter(a => a && a.active !== false);
  const mine = all.filter(a => assignmentMatchesStudent(a, user));
  const pending = mine
    .filter(a => !isDoneForAssignment(a))
    .sort((a,b)=> String(a.due||"9999").localeCompare(String(b.due||"9999")));

  // Helper: chọn "bài mặc định" để học sinh luôn có việc làm
  const pickDefaultLessonId = ()=>{
    // ưu tiên bài chưa PASS gần nhất trong lộ trình
    for(const l of LESSONS){
      if(isUnlocked(l.id) && !progress.passed[l.id]) return l.id;
    }
    // nếu đã PASS hết: chọn bài cuối cùng đã mở
    for(let i = LESSONS.length - 1; i >= 0; i--){
      if(isUnlocked(LESSONS[i].id)) return LESSONS[i].id;
    }
    return (LESSONS[0] && LESSONS[0].id) || "A1";
  };

  const cardHtml = (lessonId, title, dueIso, note, prefix)=>{
    const due = dueIso ? (" • Hạn: <b>"+formatDate(dueIso)+"</b>") : "";
    const n = note ? ("<br><span class='muted' style='color:#0b3b7a'>Ghi chú: "+escapeHtml(note)+"</span>") : "";
    return `<div style="padding:10px 12px; border:1px solid var(--border); border-radius:14px; background: rgba(255,255,255,.78); margin-top:8px;">
      <b>${escapeHtml(prefix || "")}${escapeHtml(title)}</b> <span class="chip" style="margin-left:8px;">${escapeHtml(lessonId)}</span>${due}
      ${n}
      <div style="margin-top:8px;">
        <button class="btn primary" style="padding:8px 10px; border-radius:999px; font-size:12px;"
          onclick="window.__openLesson && window.__openLesson('${lessonId}')">Làm ngay</button>
      </div>
    </div>`;
  };

  // Nếu có bài giáo viên giao -> hiện như trước
  if(pending.length){
    box.style.display = "block";
    const lines = pending.slice(0,4).map(a=>{
      const title = a.title || ("Bài " + a.lessonId);
      return cardHtml(a.lessonId, title, a.due, a.note, "");
    }).join("");
    list.innerHTML = "Bạn đang có <b>"+pending.length+"</b> bài cần hoàn thành:" + lines;
    return;
  }

  // Không có bài giao: luôn hiển thị "bài mặc định" để học sinh học mượt (không bị trống)
  const defId = pickDefaultLessonId();
  const l = LESSONS.find(x=>x.id===defId) || current || LESSONS[0];
  box.style.display = "block";

  const hadAssigned = mine.length > 0;
  const head = hadAssigned
    ? "✅ Bạn đã hoàn thành hết bài giáo viên giao. Bài luyện tập mặc định:"
    : "Chưa có bài giáo viên giao. Bài luyện tập mặc định:";
  const title = l ? l.title : ("Bài " + defId);
  list.innerHTML = head + cardHtml(defId, title, "", "Hoàn thành bài này để mở khóa bài tiếp theo.", "");
}

// Inline ghost UI
let ghost = { el:null, active:false, text:"", lastShown:0 };

const el = (id)=>document.getElementById(id);
function setPyStatus(kind, text){
  const dot = el("pyDot");
  dot.classList.remove("ok","warn");
  dot.classList.add(kind);
  el("pyStatus").textContent = text;
}
function toast(msg){
  const t = el("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(toast._tm);
  toast._tm = setTimeout(()=> t.style.display="none", 2400);
}
function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function saveJSON(key, obj){ localStorage.setItem(key, JSON.stringify(obj)); }
function loadJSON(key, fallback){
  try{ return JSON.parse(localStorage.getItem(key) || "") || fallback; }
  catch{ return fallback; }
}
function nowISO(){ return new Date().toISOString(); }

/* =========================================================
   2) UI — LEFT DROPDOWN + SEARCH + LOCK
   ========================================================= */
function setPickedLessonUI(){
  el("pickId").textContent = current.id;
  el("pickTitle").textContent = current.title;
  el("pickSub").textContent = current.short + " • " + current.skill;
  // Header: tên bài học
  const hdr = el("hdrLessonName");
  if(hdr) hdr.textContent = current.title;
  updateProgressBar();
}
function toggleLessonDrop(force){
  const drop = el("lessonDrop");
  const chev = el("chev");
  const open = typeof force === "boolean" ? force : !drop.classList.contains("open");
  drop.classList.toggle("open", open);
  chev.classList.toggle("open", open);
}
function isUnlocked(id){ return !!progress.unlocked[id]; }
function markPassed(id){
  progress.passed[id] = true;
  progress.passCount = Object.keys(progress.passed).length;
  const idx = LESSONS.findIndex(x=>x.id===id);
  if(idx >= 0){
    const cur = LESSONS[idx];
    const curLevel = (cur && cur.level) ? cur.level : "easy";
    // Mở bài tiếp theo trong CÙNG mức độ (Dễ/Khó/Nâng cao)
    for(let j = idx + 1; j < LESSONS.length; j++){
      const nx = LESSONS[j];
      const nxLevel = (nx && nx.level) ? nx.level : "easy";
      if(nxLevel === curLevel){
        progress.unlocked[nx.id] = true;
        break;
      }
    }
  }
  saveJSON(PROG_KEY, progress);
  updateScoreUI();
  updateProgressBar();
  renderLessonList();
  renderStudentTodo();
}
// Expose to patches (để PASS theo cấu trúc vẫn mở khóa + cập nhật tiến trình)
try{ window.markPassed = markPassed; }catch(e){}
function renderLessonList(){
  const list = el("lessonList");
  const q = (el("lessonSearch").value || "").trim().toLowerCase();
  const lv = (el("levelFilter") ? el("levelFilter").value : "all");
  list.innerHTML = "";
  for(const l of LESSONS){
    const searchable = (l.id+" "+l.title+" "+l.short+" "+l.skill+" "+l.text).toLowerCase();
    if(q && !searchable.includes(q)) continue;
    const lvl = (l.level || "easy");
    if(lv !== "all" && lvl !== lv) continue;

    const div = document.createElement("div");
    const locked = !isUnlocked(l.id);
    div.className = "item" + (l.id===current.id ? " active" : "") + (locked ? " locked" : "");
    const badge = progress.passed[l.id] ? `<span class="badge pass">PASS</span>`
                  : locked ? `<span class="badge lock">KHÓA</span>` : "";

    const lvlTxt = (lvl==="hard") ? "Khó" : (lvl==="adv") ? "Nâng cao" : "Dễ";
    div.innerHTML = `
      ${badge}
      <div class="k">${l.id}</div>
      <div class="t">${escapeHtml(l.title)}</div>
      <div class="s">${escapeHtml(l.short)} • <b>${escapeHtml(l.skill)}</b></div>
      <div class="tagrow"><span class="tag ${lvl}">${lvlTxt}</span></div>
    `;
    div.onclick = ()=>{
      if(locked){ toast("🔒 Bài này đang khóa. Hãy PASS bài trước để mở."); return; }
      current = l;
  try{ window.current = current; }catch(e){}
      try{ window.current = current; }catch(e){}
      document.querySelectorAll(".item").forEach(x=>x.classList.remove("active"));
      div.classList.add("active");
      setPickedLessonUI();
      renderTask();
        renderVideoPanel();
loadProgressFor(l);
      toggleLessonDrop(false);
      logEvent("lesson_select", {id:l.id});
    };
    list.appendChild(div);
  }
}

/* =========================================================
   3) UI — RIGHT TASK + TABS + FOCUS
   ========================================================= */
function renderTask(){
  el("taskTitle").textContent = current.title;
  el("taskDesc").textContent = current.short + " • " + current.skill;
  el("taskText").textContent = current.text;
  el("chipIn").textContent = "Input: " + current.input;
  el("chipOut").textContent = "Output: " + current.output;
  el("chipSkill").textContent = "Kỹ năng: " + current.skill;
  el("testsInfo").textContent = `Bộ test: ${current.tests.length} case • Ví dụ output: ${JSON.stringify(current.sampleOut)}`;

  renderVideoPanel();
}


// ===== Video bài học (chọn video theo bài) =====
function _videoKey(lessonId){ return `py10:video:last:${user.id}:${lessonId}`; }

function _normalizeVideo(url){
  const u = (url||"").trim();
  if(!u) return { kind:"none", src:"" };

  // YouTube
  const ytWatch = u.match(/https?:\/\/(www\.)?youtube\.com\/watch\?([^#]+)/i);
  const ytShort = u.match(/https?:\/\/youtu\.be\/([A-Za-z0-9_-]{6,})/i);
  const ytEmbed = u.match(/https?:\/\/(www\.)?youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/i);

  let id = "";
  if(ytEmbed) id = ytEmbed[2];
  else if(ytShort) id = ytShort[1];
  else if(ytWatch){
    const qs = new URLSearchParams(ytWatch[2]);
    id = qs.get("v") || "";
  }
  if(id){
    return { kind:"youtube", src:`https://www.youtube.com/embed/${id}` };
  }

  // direct video file
  if(/\.(mp4|webm|ogg)(\?.*)?$/i.test(u)){
    return { kind:"file", src:u };
  }

  // generic iframe (drive/other)
  return { kind:"iframe", src:u };
}

function _setVideoPlayer(url, label){
  const box = el("videoPlayer");
  const meta = el("videoMeta");
  if(!box || !meta) return;

  const n = _normalizeVideo(url);
  if(n.kind==="none"){
    box.innerHTML = '<div class="videoPlayer muted">Chưa chọn video.</div>';
    meta.textContent = "—";
    return;
  }

  if(n.kind==="file"){
    box.innerHTML = `<video controls preload="metadata" src="${n.src}"></video>`;
  } else {
    // youtube / iframe
    box.innerHTML = `<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="${n.src}"></iframe>`;
  }
  meta.textContent = (label && label.trim()) ? `Đang xem: ${label}` : `Đang xem: ${url}`;
}

function renderVideoPanel(){
  const sel = el("videoSelect");
  const inp = el("videoCustom");
  const btn = el("videoApply");
  if(!sel || !inp || !btn) return;

  // build list from lesson config
  const list = (current && current.videos) ? current.videos.filter(v=>v && v.url && String(v.url).trim()) : [];
  const saved = localStorage.getItem(_videoKey(current.id)) || "";

  // options
  sel.innerHTML = "";
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = "— Chọn video —";
  sel.appendChild(opt0);

  if(list.length===0){
    const opt = document.createElement("option");
    opt.value = "__none";
    opt.textContent = "Chưa có video mẫu cho bài này";
    opt.disabled = true;
    sel.appendChild(opt);
  } else {
    for(const v of list){
      const o = document.createElement("option");
      o.value = v.url.trim();
      o.textContent = v.title ? v.title : v.url;
      sel.appendChild(o);
    }
  }

  // if saved url not in list, add it
  if(saved && !list.some(v=>String(v.url).trim()===saved)){
    const o = document.createElement("option");
    o.value = saved;
    o.textContent = "Gần đây (đã mở)";
    sel.appendChild(o);
  }

  // set current selection
  if(saved){
    sel.value = saved;
    _setVideoPlayer(saved, "Gần đây (đã mở)");
  } else {
    _setVideoPlayer("", "");
  }

  // bind once
  if(!sel.dataset.bound){
    sel.addEventListener("change", ()=>{
      const v = sel.value;
      if(!v || v==="__none"){ _setVideoPlayer("", ""); return; }
      localStorage.setItem(_videoKey(current.id), v);
      const label = (sel.options[sel.selectedIndex] && sel.options[sel.selectedIndex].textContent) || "";
      _setVideoPlayer(v, label);
    });
    btn.addEventListener("click", ()=>{
      const u = (inp.value||"").trim();
      if(!u){ toast("Dán link video trước khi bấm Mở."); return; }
      localStorage.setItem(_videoKey(current.id), u);
      // also set select to empty (custom)
      sel.value = "";
      _setVideoPlayer(u, "Video tự nhập");
      toast("✅ Đã mở video");
    });
    sel.dataset.bound = "1";
  }
}

function initTabs(){
  document.querySelectorAll(".tab").forEach(t=>{
    t.onclick = ()=>{
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
      const key = t.dataset.tab;
      document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
      el("panel-" + key).classList.add("active");
    };
  });
}
function toggleFocus(){
  focus = !focus;
  const grid = el("grid");
  const left = el("leftCard");
  grid.classList.toggle("focus", focus);
  left.classList.toggle("hidden", focus);
  el("btnFocus").textContent = focus ? "Thoát Focus" : "Focus";
  toast(focus ? "🎯 Focus Mode: tập trung editor" : "🧩 Đã hiện sidebar");
}

/* =========================================================
   4) SAVE/LOAD + SCORE + LOG
   ========================================================= */
function saveProgress(){
  localStorage.setItem(`py10:${user.id}:${current.id}`, editor.getValue());
  localStorage.setItem(`py10:last:${user.id}`, current.id);
  toast("✅ Đã lưu " + current.id);
  logEvent("save", {id: current.id});
}
// expose để UI tối giản (gán vào nút "Nạp kết quả GV") có thể gọi mà không đổi logic
try{ window.__saveProgress = saveProgress; }catch(e){}
function loadProgressFor(lesson){
  const key = `py10:${user.id}:${lesson.id}`;
  const v = localStorage.getItem(key);
  const draft = localStorage.getItem(`py10:draft:${user.id}:${lesson.id}`);
  editor.setValue((v && v.trim()) ? v : (draft && draft.trim() ? draft : blankStarter(lesson)));
  el("stdin").value = lesson.sampleIn || "";
  el("console").textContent = "";
  lastRunError = "";
  lastTestsResult = "";
  clearErrorHighlight();
  updateCoach();
  updateGuard();
  updateLogView();
  renderStudentTodo();
}

function blankStarter(lesson){
  // Editor trống theo tinh thần "tự làm": chỉ gợi ý tối thiểu, không đưa lời giải.
  const title = (lesson && lesson.title) ? lesson.title : "Bài tập";
  const id = (lesson && lesson.id) ? lesson.id : "";
  return `# ${id} ${title}\n# Gõ lời giải của em ở đây.\n`;
}


/* =========================================================
   6.5) TỰ RA ĐỀ (bài của học sinh) — lưu cục bộ theo tài khoản
   - Không sinh lời giải hoàn chỉnh
   - Gợi ý theo 4 tầng để giữ thói quen tư duy
   ========================================================= */
const CP_LIST_KEY  = `py10:customLessons:${user.id}`;
const CP_DRAFT_KEY = `py10:customDraft:${user.id}`;

function getCustomLessons(){
  const list = loadJSON(CP_LIST_KEY, []);
  return Array.isArray(list) ? list : [];
}
function saveCustomLessons(list){ saveJSON(CP_LIST_KEY, list); }

function loadCustomLessons(){
  const list = getCustomLessons();
  if(!list.length) return;
  const existing = new Set(LESSONS.map(x=>x.id));
  for(const l of list){
    if(!l || !l.id || existing.has(l.id)) continue;
    progress.unlocked[l.id] = true;
    LESSONS.unshift(l);
    existing.add(l.id);
  }
}

function upsertCustomLesson(lesson){
  const list = getCustomLessons();
  const idx = list.findIndex(x => x && x.id === lesson.id);
  if(idx >= 0) list[idx] = lesson;
  else list.unshift(lesson);
  saveCustomLessons(list);
}

function readCpForm(){
  return {
    level: (el("cpLevel") && el("cpLevel").value) || "easy",
    title: (el("cpTitle") && el("cpTitle").value || "").trim(),
    text: (el("cpText") && el("cpText").value || "").trim(),
    input: (el("cpInput") && el("cpInput").value || "").trim(),
    output: (el("cpOutput") && el("cpOutput").value || "").trim(),
    sampleIn: (el("cpSampleIn") && el("cpSampleIn").value || ""),
    sampleOut: (el("cpSampleOut") && el("cpSampleOut").value || "")
  };
}
function writeCpForm(d){
  if(!d) return;
  if(el("cpLevel")) el("cpLevel").value = d.level || "easy";
  if(el("cpTitle")) el("cpTitle").value = d.title || "";
  if(el("cpText")) el("cpText").value = d.text || "";
  if(el("cpInput")) el("cpInput").value = d.input || "";
  if(el("cpOutput")) el("cpOutput").value = d.output || "";
  if(el("cpSampleIn")) el("cpSampleIn").value = d.sampleIn || "";
  if(el("cpSampleOut")) el("cpSampleOut").value = d.sampleOut || "";
}
function saveCpDraft(){ saveJSON(CP_DRAFT_KEY, readCpForm()); }
function restoreCpDraft(){
  const d = loadJSON(CP_DRAFT_KEY, null);
  if(d) writeCpForm(d);
}
function clearCpDraft(){
  localStorage.removeItem(CP_DRAFT_KEY);
  writeCpForm({ level:"easy", title:"", text:"", input:"", output:"", sampleIn:"", sampleOut:"" });
  if(el("cpAnalysisOut")) el("cpAnalysisOut").textContent = "—";
  renderMyCustomList();
}

function norm(s){ return String(s||"").toLowerCase(); }
function summarizeOneLine(text){
  const t = String(text||"").replace(/\s+/g,' ').trim();
  if(!t) return "—";
  return t.length > 120 ? t.slice(0,118) + "…" : t;
}

function detectTopics(all){
  const t = norm(all);
  const topics = [];
  const add = (name, re)=>{ if(re.test(t) && !topics.includes(name)) topics.push(name); };

  add("toán số", /(ước|bội|nguyên tố|gcd|lcm|chia hết|tổng chữ số|chữ số|cơ số)/);
  add("rẽ nhánh", /(nếu|if|elif|điều kiện|so sánh|>=|<=|>|<)/);
  add("vòng lặp", /(for|while|lặp|từ\s*\d+\s*đến|1\.\.n|1\.\. n|1..n|đếm|duyệt|lần)/);
  add("chuỗi", /(chuỗi|string|ký tự|palindrome|đảo|tách|split|strip)/);
  add("danh sách", /(mảng|danh sách|list|phần tử|dãy số)/);
  add("sắp xếp", /(sắp xếp|sort|tăng dần|giảm dần)/);
  add("nhập/xuất", /(input|stdin|output|in ra|nhập)/);

  if(!topics.length) topics.push("nhập/xuất");
  return topics.slice(0,5);
}

function inferInputFrames(sampleIn){
  const raw = String(sampleIn||"");
  const lines = raw.split(/\r?\n/).filter(x=>x.trim().length);
  if(!lines.length){
    return [{d:"Đọc input", t:"# (Đề không yêu cầu nhập)\n"}];
  }
  if(lines.length === 1){
    const tok = lines[0].trim().split(/\s+/);
    if(tok.length === 1){
      if(/^[-+]?\d+$/.test(tok[0])) return [{d:"Đọc 1 số", t:"n = int(input())\n"}];
      if(/^[-+]?\d+\.\d+$/.test(tok[0])) return [{d:"Đọc 1 số thực", t:"x = float(input())\n"}];
      return [{d:"Đọc 1 chuỗi", t:"s = input().strip()\n"}];
    }
    if(tok.length === 2) return [{d:"Đọc 2 số", t:"a, b = map(int, input().split())\n"}];
    if(tok.length === 3) return [{d:"Đọc 3 số", t:"a, b, c = map(int, input().split())\n"}];
    return [{d:"Đọc nhiều số trên 1 dòng", t:"arr = list(map(int, input().split()))\n"}];
  }
  const first = lines[0].trim().split(/\s+/);
  if(first.length === 1 && /^\d+$/.test(first[0]) && lines.length >= 2){
    return [
      {d:"Đọc n rồi đọc tiếp", t:"n = int(input())\n# TODO: đọc tiếp theo đúng đề\n"},
      {d:"Gợi ý danh sách", t:"arr = [int(input()) for _ in range(n)]\n"}
    ];
  }
  return [{d:"Gợi ý đọc input", t:"# TODO: đọc theo từng dòng và split() đúng định dạng\n"}];
}

function analyzeProblem(payload){
  const all = [payload.title, payload.text, payload.input, payload.output].join("\n");
  const topics = detectTopics(all);
  const skills = topics.join(", ");

  const tier1 = [
    "Tóm tắt yêu cầu (1 câu): " + summarizeOneLine(payload.text),
    "Xác định đúng Input/Output theo đề (đúng số dòng, khoảng trắng, xuống dòng).",
    "Chia bài thành 3 phần: Đầu vào → Xử lý → Đầu ra (viết ý tưởng trước rồi mới code)."
  ];

  const tier2 = [
    "Đầu vào: " + (payload.input ? summarizeOneLine(payload.input) : "(chưa mô tả)"),
    "Đầu ra: " + (payload.output ? summarizeOneLine(payload.output) : "(chưa mô tả)"),
    "Rà các trường hợp biên (n=0/1, số âm, chuỗi rỗng, dữ liệu nhiều dòng…) nếu đề có."
  ];

  const tier3 = ["Lập kế hoạch thuật toán (mỗi bước 1 dòng):"];
  if(topics.includes("toán số")) tier3.push("- Tách dữ liệu (chữ số/ước/bội…), kiểm tra điều kiện, cộng/đếm/so sánh theo đề.");
  if(topics.includes("vòng lặp")) tier3.push("- Dùng vòng lặp để duyệt; cập nhật biến tổng/đếm/max/min.");
  if(topics.includes("rẽ nhánh")) tier3.push("- Dùng if/elif; kiểm tra thứ tự điều kiện để tránh chồng chéo.");
  if(topics.includes("chuỗi")) tier3.push("- Chuẩn hoá chuỗi (strip/lower); duyệt ký tự hoặc tách bằng split().");
  if(topics.includes("danh sách")) tier3.push("- Đọc list; duyệt list; xử lý từng phần tử theo đề.");
  if(topics.includes("sắp xếp")) tier3.push("- Sắp xếp rồi xử lý/so sánh; chú ý thứ tự tăng/giảm.");
  tier3.push("- In kết quả đúng định dạng (đây là lỗi hay gặp nhất).");

  const frames = inferInputFrames(payload.sampleIn || "");
  frames.push({d:"Khung xử lý", t:"# TODO: viết thuật toán theo ý tưởng (không cần dài)\n"});
  frames.push({d:"Khung in kết quả", t:"# TODO: print(...) đúng định dạng đề\n"});

  const cloze = [];
  if(topics.includes("vòng lặp")) cloze.push({d:"Khung vòng lặp", t:"for i in range(___, ___):\n    # TODO\n"});
  if(topics.includes("rẽ nhánh")) cloze.push({d:"Khung if/elif", t:"if ___:\n    ...\nelif ___:\n    ...\nelse:\n    ...\n"});
  if(topics.includes("chuỗi")) cloze.push({d:"Xử lý chuỗi", t:"s = input().strip()\n# TODO: xử lý s\n"});
  if(topics.includes("danh sách")) cloze.push({d:"Duyệt list", t:"for x in arr:\n    # TODO\n"});
  if(!cloze.length) cloze.push({d:"Khung chung", t:"# TODO: triển khai theo 3 phần (Input → Process → Output)\n"});

  const tier4 = [
    "Tầng 4 chỉ gợi ý mức 'một dòng/ý' — em vẫn tự ghép thành bài hoàn chỉnh.",
    "Nếu output sai: dùng nút So sánh Output để kiểm tra xuống dòng / khoảng trắng.",
    "Luôn bấm Test để xác nhận PASS trước khi nộp."
  ];

  return { topics, skills, tier1, tier2, tier3, tier4, frames, cloze };
}

function formatAnalysisForPanel(ana){
  const lines = [];
  lines.push("Kỹ năng/Chủ đề nhận diện: " + (ana.skills || "—"));
  lines.push("");
  lines.push("Tầng 1 (Ý):");
  ana.tier1.forEach(x=>lines.push("- " + x));
  lines.push("");
  lines.push("Tầng 2 (Khung):");
  ana.tier2.forEach(x=>lines.push("- " + x));
  lines.push("");
  lines.push("Tầng 3 (Điền khuyết):");
  ana.tier3.forEach(x=>lines.push("- " + x));
  lines.push("");
  lines.push("Tầng 4 (Hoàn thiện dòng):");
  ana.tier4.forEach(x=>lines.push("- " + x));
  return lines.join("\n");
}

function newCustomId(){
  const list = getCustomLessons();
  const nums = list.map(x=>String(x.id||"").match(/^U(\d+)$/)).filter(Boolean).map(m=>parseInt(m[1],10));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  return "U" + String(next).padStart(3,'0');
}

function buildCustomLesson(payload, ana){
  const id = newCustomId();
  const title = payload.title || ("Bài tự tạo " + id);
  const scaffold = `# ${id} — ${title}\n# Đề: ${summarizeOneLine(payload.text)}\n# Gõ lời giải của em ở dưới:\n`;
  const tests = [];
  const sin = payload.sampleIn || "";
  const sout = payload.sampleOut || "";
  if((sin.trim() || sout.trim())) tests.push({stdin: sin, expected: sout});
  // Nếu không có ví dụ thì vẫn cho 1 test rỗng để tránh lỗi
  if(!tests.length) tests.push({stdin:"", expected:""});
  return {
    id,
    level: payload.level || "easy",
    title: `${id} — ${title}`,
    short: "Bài tự ra đề",
    skill: ana.skills || "nhập/xuất",
    input: payload.input || "(theo đề tự tạo)",
    output: payload.output || "(theo đề tự tạo)",
    text: payload.text || "",
    sampleIn: payload.sampleIn || "",
    sampleOut: payload.sampleOut || "",
    tests,
    scaffold,
    snips: [
      {d:"Tầng 1: Ý tưởng", t:(ana.tier1||[]).slice(0,2).join("\n") + "\n"},
      {d:"Tầng 2: Input/Output", t:(ana.tier2||[]).slice(0,2).join("\n") + "\n"}
    ],
    analysis: ana,
    isCustom: true
  };
}

function renderMyCustomList(){
  const box = el("cpMyList");
  if(!box) return;
  const list = getCustomLessons();
  if(!list.length){
    box.innerHTML = '<span class="chip">Chưa có bài tự tạo</span>';
    return;
  }
  box.innerHTML = '';
  list.slice(0,12).forEach(l=>{
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = l.id + ' • ' + String(l.title||'').replace(/^U\d+\s—\s/, '');
    b.onclick = ()=>{ if(window.__openLesson) window.__openLesson(l.id); };
    box.appendChild(b);
  });
}

function doCpAnalyze(){
  const p = readCpForm();
  if(!p.text){
    toast("✍️ Em hãy nhập mô tả đề bài trước.");
    return;
  }
  const ana = analyzeProblem(p);
  if(el("cpAnalysisOut")) el("cpAnalysisOut").textContent = formatAnalysisForPanel(ana);
  saveCpDraft();
}

function doCpCreateAndOpen(){
  const p = readCpForm();
  if(!p.text){
    toast("✍️ Em hãy nhập mô tả đề bài trước.");
    return;
  }
  if(!p.title){
    p.title = "Bài tự tạo";
  }
  const ana = analyzeProblem(p);
  const lesson = buildCustomLesson(p, ana);

  // Lưu + nạp vào danh sách bài hiện tại
  upsertCustomLesson(lesson);
  progress.unlocked[lesson.id] = true;
  saveJSON(PROG_KEY, progress);

  // Đưa vào LESSONS (đầu danh sách)
  if(!LESSONS.find(x=>x.id===lesson.id)) LESSONS.unshift(lesson);

  // render list + mở luôn
  renderLessonList();
  renderMyCustomList();
  if(el("cpAnalysisOut")) el("cpAnalysisOut").textContent = formatAnalysisForPanel(ana);
  if(window.__openLesson) window.__openLesson(lesson.id);
  toast("📌 Đã tạo bài và mở để làm ngay.");
}

function updateProgressBar(){
  const fill = el("progressFill");
  const txt = el("progressText");
  if(!fill || !txt) return;
  const total = (Array.isArray(LESSONS) ? LESSONS.length : 0);
  const passed = Number(progress.passCount || 0);
  const pct = total ? Math.round((passed/total)*100) : 0;
  fill.style.width = pct + "%";
  fill.classList.toggle("done", pct >= 100);
  txt.textContent = `${passed}/${total} • ${pct}%`;
}

function updateScoreUI(){
  el("thinkScore").textContent = String(Math.max(0, Math.round(thinkScore)));
  el("passCount").textContent = String(progress.passCount || 0);
  updateProgressBar();
}
function logEvent(type, payload){
  logData.events.push({ t: nowISO(), type, lesson: current.id, ...payload });
  if(logData.events.length > 200) logData.events = logData.events.slice(-200);
  saveJSON(LOG_KEY, logData);
  updateLogView();
}
try{ window.logEvent = logEvent; }catch(e){}
function updateLogView(){
  const last = logData.events.slice(-12).reverse();
  if(!last.length){ el("logView").textContent = "Chưa có nhật ký."; return; }
  const lines = last.map(e=>{
    const time = e.t.replace("T"," ").replace("Z","");
    let extra = "";
    if(e.type==="test") extra = ` • ${e.result || ""}`;
    if(e.type==="run" && e.ok===false) extra = ` • lỗi`;
    if(e.type==="pass") extra = ` • MỞ BÀI TIẾP`;
    return `• [${time}] (${e.lesson}) ${e.type}${extra}`;
  });
  el("logView").textContent = lines.join("\n");
}
function exportCSV(){
  // Giữ nguyên nút/luồng cũ, nhưng xuất file Excel (.xls) để mở trực tiếp bằng Excel.
  const header = ["time","student_id","student_name","lesson","type","result","detail"];
  const rows = logData.events.map(e=>{
    const detail = e.errorLine ? `line=${e.errorLine}` : (e.detail || "");
    return [
      e.t, user.id, user.name || "", e.lesson, e.type, (e.result || ""), (detail || "")
    ].map(x => String(x ?? ""));
  });

  function esc(s){
    return String(s ?? "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;");
  }
  function tr(cells, tag){
    return "<tr>" + cells.map(c=>`<${tag}>${esc(c)}</${tag}>`).join("") + "</tr>";
  }

  const sheetName = "NhatKy";
  let html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">`;
  html += `<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${esc(sheetName)}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->`;
  html += `</head><body><table border="1">`;
  html += tr(header, "th");
  rows.forEach(r=>{ html += tr(r, "td"); });
  html += `</table></body></html>`;

  const blob = new Blob(["\ufeff", html], {type:"application/vnd.ms-excel;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nhatky_${user.id}.xls`;
  a.click();
  setTimeout(()=>{ try{ URL.revokeObjectURL(url); }catch{} }, 1000);
  toast("📄 Đã xuất Excel");
}

// expose để UI tối giản dùng lại (nút "Nạp kết quả GV")
try{ window.__exportExcel = exportCSV; }catch(e){}

// expose để UI tối giản có thể gọi xuất Excel
try{ window.__exportExcel = exportCSV; }catch(e){}


/* =========================================================
   5) PYODIDE RUN/TEST + DEBUG HIGHLIGHT
   ========================================================= */
// Runtime ưu tiên: Skulpt (offline, tải nhanh) → nếu thiếu mới dùng Pyodide.
let PY_RUNTIME = "skulpt";

function initSkulptRuntime(){
  if(!(window.Sk && typeof window.Sk.configure === "function")) return false;
  // cấu hình cơ bản: stdlib + giới hạn chạy để tránh treo
  Sk.configure({
    read: (x)=>{
      if(!Sk.builtinFiles || !Sk.builtinFiles.files || !(x in Sk.builtinFiles.files)){
        throw new Error("Skulpt: thiếu file thư viện: " + x);
      }
      return Sk.builtinFiles.files[x];
    },
    output: ()=>{},
    inputfun: ()=>"",
    inputfunTakesPrompt: true,
    execLimit: 100000
  });
  return true;
}

async function initPyodide(){
  // 0) Nếu Skulpt có sẵn thì dùng ngay (đảm bảo chạy 100% trên GitHub Pages)
  try{
    if(initSkulptRuntime()){
      PY_RUNTIME = "skulpt";
      pyReady = true;
      try{ window.pyReady = true; }catch(e){}
      setPyStatus("ok", "Python sẵn sàng");
      el("btnRun").disabled = false;
      el("btnTest").disabled = false;
      el("console").textContent = "✅ Python sẵn sàng. Bấm Run hoặc Test.\n";
      return;
    }
  }catch(e){
    console.warn("Skulpt init fail, fallback Pyodide", e);
  }

  // Tăng độ ổn định tải Pyodide:
  // - Chờ loader ở <head> (nếu có)
  // - Thử nhiều nguồn indexURL (local ./pyodide/ trước, rồi CDN)
  // - Có timeout để tránh treo vô hạn
  try{
    setPyStatus("warn", "Đang tải Python…");

    // 1) đảm bảo có loadPyodide
    if(typeof window.__PYODIDE_SCRIPT_READY !== "undefined"){
      try{ await window.__PYODIDE_SCRIPT_READY; }catch(e){}
    }
    if(typeof loadPyodide !== "function"){
      throw new Error("Không nạp được pyodide.js (có thể do mạng/tiện ích chặn).\nGợi ý: tắt AdBlock hoặc thử mạng khác.\nNếu vẫn lỗi: đặt thư mục 'pyodide' vào cùng repo và chạy lại.");
    }

    const V = "0.25.1";
    // Tránh bị "treo" lâu khi repo CHƯA có thư mục ./pyodide/.
    // Nếu phát hiện có ./pyodide/ thì ưu tiên local; nếu không, ưu tiên CDN.
    const cdnBases = [
      `https://cdn.jsdelivr.net/pyodide/v${V}/full/`,
      `https://cdn.jsdelivr.net/npm/pyodide@${V}/full/`,
      `https://unpkg.com/pyodide@${V}/full/`
    ];
    let useLocal = false;
    try{
      // HEAD nhanh hơn GET; nếu server không hỗ trợ HEAD thì sẽ rơi vào catch và dùng CDN
      const r = await fetch("./pyodide/pyodide.js", { method: "HEAD", cache: "no-store" });
      useLocal = !!(r && r.ok);
    }catch(e){ useLocal = false; }
    const bases = useLocal ? ["./pyodide/", ...cdnBases] : cdnBases;
    const tried = [];

    const withTimeout = (p, ms) => new Promise((resolve, reject)=>{
      const t = setTimeout(()=>reject(new Error("timeout")), ms);
      Promise.resolve(p).then(v=>{clearTimeout(t); resolve(v);}, e=>{clearTimeout(t); reject(e);});
    });

    let lastErr = null;
    for(let i=0;i<bases.length;i++){
      const base = bases[i];
      tried.push(base);
      setPyStatus("warn", i===0 ? "Đang tải Python…" : `Đang tải Python… (thử nguồn ${i+1})`);
      try{
        // 45s đủ cho mạng trường; nếu timeout thì thử nguồn khác
        pyodide = await withTimeout(loadPyodide({ indexURL: base }), 45000);
        pyReady = true;
      try{ window.pyReady = true; }catch(e){}
        setPyStatus("ok", "Python sẵn sàng");
        el("btnRun").disabled = false;
        el("btnTest").disabled = false;
        el("console").textContent = "✅ Python sẵn sàng. Bấm Run hoặc Test.\n";
        return;
      }catch(e){
        lastErr = e;
      }
    }

    // Nếu tới đây vẫn fail
    setPyStatus("warn", "Lỗi tải Python");
    const msg = (String(lastErr||""))
      .replaceAll("\n\n","\n")
      .slice(0, 1200);
    el("console").textContent =
      "❌ Không tải được môi trường Python (Pyodide).\n"+
      "Nguyên nhân thường gặp: mạng trường chặn CDN hoặc tải file lớn bị gián đoạn.\n\n"+
      "Cách khắc phục nhanh:\n"+
      "1) Tắt AdBlock/tiện ích chặn, rồi Ctrl+Shift+R để tải lại.\n"+
      "2) Thử đổi mạng (Wi‑Fi ↔ 4G).\n"+
      "3) Cách ổn định nhất: upload thư mục 'pyodide' vào cùng repo (./pyodide/) để chạy offline CDN.\n\n"+
      "Đã thử các nguồn:\n- " + tried.join("\n- ") + "\n\n"+
      "Chi tiết lỗi: " + msg;

  }catch(e){
    setPyStatus("warn", "Lỗi tải Python");
    el("console").textContent = "❌ Không tải được Pyodide.\n" + String(e);
  }
}
async function runPython(code, stdin){
  if(!pyReady) return {stdout:"", error:"Python chưa sẵn sàng."};

  // ===== Runtime 1: Skulpt (offline, ổn định cho kiến thức Python cơ bản) =====
  if(PY_RUNTIME === "skulpt"){
    let stdout = "";
    let stderr = "";
    const lines = String(stdin ?? "").replace(/\r\n/g,"\n").split("\n");
    let idx = 0;

    // cấu hình lại mỗi lần chạy để gắn input/output theo phiên
    Sk.configure({
      output: (t)=>{ stdout += t; },
      read: (x)=>{
        if(!Sk.builtinFiles || !Sk.builtinFiles.files || !(x in Sk.builtinFiles.files)){
          throw new Error("Skulpt: thiếu file thư viện: " + x);
        }
        return Sk.builtinFiles.files[x];
      },
      inputfun: (prompt)=>{
        // Skulpt gọi input() nhiều lần, trả từng dòng
        if(idx >= lines.length) return "";
        return String(lines[idx++]);
      },
      inputfunTakesPrompt: true,
      execLimit: 200000
    });

    try{
      await Sk.misceval.asyncToPromise(()=>
        Sk.importMainWithBody("__main__", false, String(code), true)
      );
    }catch(e){
      // Skulpt error thường là object; ưu tiên toString()
      stderr = (e && e.toString) ? e.toString() : String(e);
    }
    return { stdout, error: stderr };
  }

  // ===== Runtime 2: Pyodide (nếu sử dụng) =====
  if(!window.pyodide) return {stdout:"", error:"Pyodide chưa sẵn sàng."};
  pyodide.globals.set("USER_CODE", code);
  pyodide.globals.set("USER_STDIN", stdin ?? "");
  const runner = `
import sys, io, traceback, contextlib
code = USER_CODE
stdin = USER_STDIN
_out = io.StringIO()
_err = io.StringIO()
sys.stdin = io.StringIO(stdin)
ns = {"__name__":"__main__"}
try:
    with contextlib.redirect_stdout(_out), contextlib.redirect_stderr(_err):
        exec(code, ns)
except Exception:
    traceback.print_exc(file=_err)
{"stdout": _out.getvalue(), "error": _err.getvalue()}
`;
  const res = await pyodide.runPythonAsync(runner);

  let stdout = "";
  let error  = "";
  try{
    if(res && typeof res.get === "function"){
      const outP = res.get("stdout");
      const errP = res.get("error");
      stdout = outP == null ? "" : String(outP);
      error  = errP == null ? "" : String(errP);
      if(outP && typeof outP.destroy === "function") outP.destroy();
      if(errP && typeof errP.destroy === "function") errP.destroy();
    } else {
      const js = (res && typeof res.toJs === "function") ? res.toJs() : res;
      stdout = js?.stdout ?? js?.["stdout"] ?? "";
      error  = js?.error  ?? js?.["error"]  ?? "";
      stdout = String(stdout);
      error  = String(error);
    }
  }catch(e){
    error = String(e);
  } finally {
    if(res && typeof res.destroy === "function") res.destroy();
  }
  return { stdout, error };
}
try{ window.runPython = runPython; }catch(e){}
function normalize(s){ return String(s).replace(/\r\n/g,"\n").replace(/[ \t]+$/gm,"").trimEnd(); }
function normalizeLoose(s){
  return String(s||"")
    .replace(/\r\n/g,"\n")
    .replace(/[ \t]+$/gm,"")
    .trim()
    .replace(/[ \t]+/g," ")
    .replace(/\n{2,}/g,"\n");
}
try{ window.normalize = normalize; }catch(e){}
try{ window.normalizeLoose = normalizeLoose; }catch(e){}
let errorLineHandle = null;
function clearErrorHighlight(){
  if(errorLineHandle !== null){
    editor.removeLineClass(errorLineHandle, "background", "cm-errorline");
    errorLineHandle = null;
  }
}
function extractErrorLine(trace){
  const m = String(trace).match(/line\s+(\d+)/i);
  if(!m) return null;
  const n = parseInt(m[1],10);
  if(!Number.isFinite(n)) return null;
  return n;
}
function extractErrorType(trace){
  const lines = String(trace||"").trim().split(/\n/);
  for(let i=lines.length-1;i>=0;i--){
    const s = (lines[i]||"").trim();
    if(!s) continue;
    const m = s.match(/^([A-Za-z_][A-Za-z0-9_]*):/);
    if(m) return m[1];
  }
  return "";
}
function highlightErrorLine(lineNumber1Based){
  clearErrorHighlight();
  const ln = lineNumber1Based - 1;
  if(ln >= 0 && ln < editor.lineCount()){ 
    errorLineHandle = ln;
    editor.addLineClass(ln, "background", "cm-errorline");
    editor.setCursor({line: ln, ch: 0});
    editor.focus();
  }
}

function _nonCommentLineCount(code){
  return String(code||"").split(/\n/).map(s=>s.trim()).filter(s=>s && !s.startsWith("#")).length;
}
function structureOk(code, lesson){
  const c = String(code||"");
  const lc = c.toLowerCase();
  const need = [];
  if(_nonCommentLineCount(c) === 0) need.push("có code (không để trống)");
  // input/output basic
  const inp = (lesson && lesson.input) ? String(lesson.input) : "";
  if(inp && inp !== "(không có)" && !/\binput\s*\(/.test(lc)) need.push("đọc input()");
  const title = ((lesson && lesson.title) ? lesson.title : "").toLowerCase();
  const text = ((lesson && lesson.text) ? lesson.text : "").toLowerCase();
  const skill = ((lesson && lesson.skill) ? lesson.skill : "").toLowerCase();
  const hay = title + " " + text + " " + skill;

  const isFuncTask = (hay.includes("viết hàm") || hay.includes("định nghĩa hàm") || hay.includes("xây dựng hàm") || hay.includes("def") || hay.includes("function"));
const hasPrint = /\bprint\s*\(/.test(lc);
  const hasReturn = /\breturn\b/.test(lc);

  // Với bài hàm: không bắt buộc print(), chỉ cần def và (return hoặc print)
  if(isFuncTask){
    if(!/\bdef\b/.test(lc)) need.push("định nghĩa hàm def");
    if(!(hasReturn || hasPrint)) need.push("return (hoặc print) trong hàm");
  }else{
    if(!hasPrint) need.push("in kết quả bằng print()");
  }

  // control structures
  if(hay.includes("if") || hay.includes("điều kiện") || hay.includes("phân loại") || hay.includes("so sánh")){
    if(!/\bif\b/.test(lc)) need.push("dùng if (điều kiện)");
  }
  if(hay.includes("vòng lặp") || skill.includes("for") || skill.includes("while") || hay.includes("tổng 1..n") || hay.includes("từ 1 đến")){
    if(!/\bfor\b|\bwhile\b/.test(lc)) need.push("dùng vòng lặp (for/while)");
  }


  // modulo / chia hết / nguyên tố
  if(hay.includes("nguyên tố") || hay.includes("chia hết") || hay.includes("bội") || hay.includes("ước") || hay.includes("mod") || hay.includes("%")){
    if(!/%/.test(c)) need.push("dùng phép % (chia lấy dư)");
  }

  // danh sách / mảng
  if(hay.includes("danh sách") || hay.includes("list") || hay.includes("mảng") || hay.includes("array")){
    if(!/\[/.test(c) && !/\blist\s*\(/.test(lc) && !/\.append\s*\(/.test(lc)) need.push("dùng list ([], list(), append)");
  }

  // arithmetic hints
  if((title.includes("tổng") || text.includes("tổng") || skill.includes("+")) && inp && inp !== "(không có)"){
    if(!/\+/.test(c)) need.push("phép cộng (+)");
  }
  if(title.includes("hiệu") || text.includes("hiệu") || skill.includes("-")){
    if(!/-/.test(c)) need.push("phép trừ (-)");
  }
  if(title.includes("tích") || text.includes("tích") || skill.includes("*")){
    if(!/\*/.test(c)) need.push("phép nhân (*)");
  }
  if(title.includes("chia") || text.includes("chia") || skill.includes("/")){
    if(!/\//.test(c)) need.push("phép chia (/)");
  }

  // NOTE: Chấm theo cấu trúc cho TẤT CẢ bài:
  // Không bắt buộc in đúng từng chữ như expected. Chỉ cần có cấu trúc/kỹ năng + chạy không lỗi.
  return { ok: need.length === 0, need };

}
try{ window.structureOk = structureOk; }catch(e){}  

async function runTests(){
  const code = editor.getValue();
  let pass = 0;
  let details = [];
  let hadError = false;
  clearErrorHighlight();

  
  for(let i=0;i<current.tests.length;i++){
    const tc = current.tests[i];
    const r = await runPython(code, tc.stdin);
    const err = (r.error || "");
    if(err.trim()){
      hadError = true;
      details.push(`❌ Test ${i+1}: Lỗi khi chạy\n${err}`);
      lastRunError = err;
      const ln = extractErrorLine(err);
      if(ln) highlightErrorLine(ln);
      break;
    }
    pass++;
    details.push(`✅ Test ${i+1}: Chạy không lỗi`);
  }

  // PASS theo cấu trúc cho TẤT CẢ bài: không so khớp output.
  let structurePass = false;
  let st = null;
  try{ st = structureOk(code, current); }catch(e){}
  if(!hadError && st && st.ok){
    if(pass === current.tests.length){
      structurePass = true;
      details.push(`\n✅ PASS theo cấu trúc (không cần khớp output).`);
    }else{
      details.push(`\n⚠️ Code đúng cấu trúc nhưng chưa chạy hết test — không PASS.`);
    }
  }else if(st && st.need && st.need.length){
    details.push(`\nℹ️ Thiếu cấu trúc để PASS: ${st.need.slice(0,6).join(', ')}`);
  }


  lastRunOrTestTs = Date.now();
  lastTestsResult = `Đạt ${pass}/${current.tests.length} test`;
  el("console").textContent = details.join("\n") + "\n\n" + lastTestsResult + "\n";
  document.querySelector('.tab[data-tab="tests"]').click();

  logEvent("test", { result: lastTestsResult });
  if(structurePass){
    if(!progress.passed[current.id]){
      markPassed(current.id);
      logEvent("pass", { result: "PASS" });
      toast("🎉 PASS! Đã mở khóa bài tiếp theo.");
      thinkScore += Math.max(3, 10 - acceptStreak * 2);
    } else {
      toast("✅ PASS (đã PASS trước đó)");
      thinkScore += 1;
    }
  } else {
    thinkScore = Math.max(0, thinkScore - 1);
  }
  updateScoreUI();
  updateCoach();
  updateGuard();
  updateInlineGhost(editor);
}
try{ window.runTests = runTests; }catch(e){}

/* =========================================================
   6) COACH + Checklist
   ========================================================= */
function analyzeChecklist(code){
  const c = code || "";
  const needInput = current.input !== "(không có)";
  const needLoop = /vòng lặp|Tổng 1\.\.n|nguyên tố/i.test(current.title + " " + current.text + " " + current.skill);
  const hasInput = /input\s*\(/.test(c);
  const hasParse = /map\(|int\(|float\(|split\(/.test(c);
  const hasIf = /\bif\b/.test(c);
  const hasLoop = /\bfor\b|\bwhile\b/.test(c);
  const hasPrint = /print\s*\(/.test(c);
  return [
    {ok: !needInput || hasInput,  title:"Đọc input", desc: needInput ? "Dùng input()." : "Bài không cần input."},
    {ok: !needInput || hasParse,  title:"Ép kiểu / tách dữ liệu", desc:"int/float + split/map."},
    {ok: !needLoop || (hasLoop || hasIf), title:"Thuật toán", desc:"if/for/while theo đề."},
    {ok: hasPrint, title:"In kết quả", desc:"print(...) đúng định dạng."},
  ];
}
function parseCommonPitfalls(errText){
  const e = (errText || "").toLowerCase();
  const tips = [];
  if(!e.trim()){ 
    tips.push("Nếu sai test: kiểm tra xuống dòng, khoảng trắng, format output.");
    tips.push("In tạm biến trung gian để debug.");
    return tips;
  }
  if(e.includes("syntaxerror")) tips.push("SyntaxError: thiếu ':' hoặc sai ngoặc/nháy.");
  if(e.includes("indentationerror")) tips.push("IndentationError: thụt lề 4 dấu cách.");
  if(e.includes("nameerror")) tips.push("NameError: biến chưa khai báo hoặc gõ sai.");
  if(e.includes("valueerror")) tips.push("ValueError: ép kiểu sai, kiểm tra input.split().");
  tips.push("Mẹo: chạy với input mẫu rồi test lại.");
  return tips;
}
function generateCoach(code, errText, testsText, level){
  const checklist = analyzeChecklist(code);
  const missing = checklist.filter(x=>!x.ok);

  let hint = "";
  const steps = [];

  if(errText && errText.trim()){ 
    const ln = extractErrorLine(errText);
    hint = ln ? `Có lỗi ở khoảng dòng ${ln}. Sửa lỗi trước rồi Run/Test lại.` : "Ưu tiên sửa lỗi trước → Run/Test lại.";
    steps.push("Đọc traceback: tên lỗi + dòng lỗi.");
    steps.push("Sửa cú pháp/indent/biến → chạy lại.");
  } else if(testsText && /đạt 0\//i.test(testsText)) {
    hint = "Chạy được nhưng output chưa khớp test → kiểm tra format in.";
    steps.push("So sánh output với expected (xuống dòng/space).");
  } else if(missing.length) {
    hint = "Hoàn thiện theo checklist (từng bước nhỏ).";
    missing.slice(0,3).forEach(m=> steps.push(m.title + " → " + m.desc));
  } else {
    hint = "Bạn đã đủ bước cơ bản. Hãy bấm Test để chắc chắn PASS.";
    steps.push("Nếu FAIL: xem lại đề và xử lý trường hợp đặc biệt.");
  }

  if(level === 1) return {hint, steps: steps.slice(0,2), checklist, pitfalls: parseCommonPitfalls(errText)};
  if(level === 3) steps.push("Bạn có thể bấm 'Nạp khung' để xem cấu trúc mẫu.");
  return {hint, steps, checklist, pitfalls: parseCommonPitfalls(errText)};
}
function renderCoachUI(coach){
  el("coachHint").textContent = coach.hint;
  const ul = el("coachSteps"); ul.innerHTML = "";
  coach.steps.forEach(s=>{ const li = document.createElement("li"); li.textContent = s; ul.appendChild(li); });
  const cl = el("checklist"); cl.innerHTML = "";
  coach.checklist.forEach(it=>{
    const row = document.createElement("div"); row.className = "c";
    const tick = document.createElement("div"); tick.className = "tick" + (it.ok ? " ok" : ""); tick.textContent = it.ok ? "✓" : "•";
    const ct = document.createElement("div"); ct.className = "ct"; ct.innerHTML = `<b>${escapeHtml(it.title)}</b><br>${escapeHtml(it.desc)}`;
    row.appendChild(tick); row.appendChild(ct); cl.appendChild(row);
  });
  const pf = el("pitfalls"); pf.innerHTML = "";
  coach.pitfalls.slice(0,5).forEach(p=>{ const li=document.createElement("li"); li.textContent=p; pf.appendChild(li); });
}
function updateCoach(){
  const code = editor ? editor.getValue() : "";
  const level = parseInt(el("levelSel").value, 10);
  const coach = generateCoach(code, lastRunError, lastTestsResult, level);
  renderCoachUI(coach);
}

/* =========================================================
   7) AUTOCOMPLETE + INLINE GHOST + Think-Guard
   ========================================================= */
const PY_KEYWORDS = ["print","input","range","len","int","float","str","list","dict","set","tuple","map","sum","min","max","abs","round","sorted","for","while","if","elif","else","break","continue","pass","return","True","False","None"];

const HINT_EXTRA_KEYS = {
  // Chống phụ thuộc: Enter KHÔNG chèn gợi ý. Enter = xuống dòng bình thường.
  "Enter": function(cm, handle){
    try{ handle && handle.close && handle.close(); }catch(e){}
    cm.execCommand("newlineAndIndent");
  },
  // Chỉ cho chèn bằng Tab hoặc click.
  "Tab": function(cm, handle){
    if(typeof canAcceptSuggestion === "function" && !canAcceptSuggestion(cm)){
      try{ window.toast && toast("🧠 Hãy tự gõ thêm (≥ 6 ký tự/dòng) hoặc Run/Test rồi mới dùng gợi ý."); }catch(e){}
      try{ handle && handle.close && handle.close(); }catch(e){}
      return;
    }
    try{ handle && handle.pick && handle.pick(); }catch(e){}
  },
  "Esc": function(cm, handle){ try{ handle && handle.close && handle.close(); }catch(e){} }
};
try{ window.HINT_EXTRA_KEYS = HINT_EXTRA_KEYS; }catch(e){}
function customPythonHint(cm){
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line);
  let from = cur.ch;
  while (from && /[A-Za-z0-9_\.]/.test(line.charAt(from-1))) from--;
  const prefix = line.slice(from, cur.ch);

  const fromPos = CodeMirror.Pos(cur.line, from);
  const toPos   = CodeMirror.Pos(cur.line, cur.ch);

  const wrap = (item)=>({
    ...item,
    hint: function(cm2, data, completion){
      // Chống phụ thuộc: chặn chèn khi Think-Guard chưa cho phép
      if(typeof canAcceptSuggestion === "function" && !canAcceptSuggestion(cm2)){
        try{ window.toast && toast("🧠 Hãy tự gõ thêm (≥ 6 ký tự/dòng) hoặc Run/Test rồi mới dùng gợi ý."); }catch(e){}
        return;
      }
      cm2.replaceRange(completion.text, data.from, data.to, "complete");
      }
  });

  const lessonSnips = (current.snips || []).map(s => wrap({ text: s.t, displayText: "◦ " + s.d }));
  const base = PY_KEYWORDS
    .filter(k => k.toLowerCase().startsWith(prefix.toLowerCase()))
    .map(k => wrap({text: k, displayText: k}));

  const extra = [];
  if(prefix === ""){
    extra.push(wrap({text:"print()", displayText:"print()"}));
    extra.push(wrap({text:"input()", displayText:"input()"}));
  }

  return { list: [...lessonSnips, ...extra, ...base].slice(0,18), from: fromPos, to: toPos };
}
function maybeAutoComplete(cm, changeObj){
  const txt = changeObj.text && changeObj.text[0] ? changeObj.text[0] : "";
  if(!txt) return;
  // Chỉ gợi ý khi gõ chữ/số/dấu _ hoặc .
  if (!/^[A-Za-z0-9_\.]$/.test(txt)) return;
  // Nếu hint đang mở thì không mở lại (tránh giật/lag)
  if(cm && cm.state && cm.state.completionActive) return;

  // Debounce để mượt hơn
  if(acTimer) clearTimeout(acTimer);
  acTimer = setTimeout(()=>{
    try{
      const cur = cm.getCursor();
      const line = cm.getLine(cur.line);
      let from = cur.ch;
      while (from && /[A-Za-z0-9_\.]/.test(line.charAt(from-1))) from--;
      const prefix = line.slice(from, cur.ch);
      if(prefix.length >= 1){
        CodeMirror.showHint(cm, customPythonHint, {completeSingle:false, extraKeys: HINT_EXTRA_KEYS});
      }
    }catch(e){}
  }, 120);
}
function noteAccept(){
  acceptStreak++;
  setTimeout(()=>{ acceptStreak = Math.max(0, acceptStreak - 1); }, 45000);
  thinkScore = Math.max(0, thinkScore - 0.5);
  updateScoreUI();
}
function noteManualTyping(){
  lastManualTypeTs = Date.now();
  thinkScore += 0.08;
  updateScoreUI();
}
function canAcceptSuggestion(cm){
  if(!thinkMode) return true;
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line) || "";
  const typed = line.slice(0, cur.ch).replace(/\s+/g,"");
  const now = Date.now();
  if(now - lastRunOrTestTs < 25000) return true;
  if(typed.length >= 6) return true;
  if(acceptStreak >= 3) return false;
  return false;
}
function ensureGhostEl(){
  if(ghost.el) return;
  const div = document.createElement("div");
  div.className = "ghost-inline";
  div.style.display = "none";
  div.innerHTML = `<span class="hint" id="ghostText"></span>`;
  document.body.appendChild(div);
  ghost.el = div;
}
function hideGhost(){ if(!ghost.el) return; ghost.active=false; ghost.el.style.display="none"; }
function showGhostAt(cm, remainderText){
  ensureGhostEl();
  const cur = cm.getCursor();
  const coords = cm.cursorCoords(cur, "page");
  const box = ghost.el;
  const textEl = box.querySelector("#ghostText");
  ghost.active = true;
  ghost.text = remainderText;
  textEl.textContent = "Tab: " + remainderText;
  box.style.left = (coords.left + 6) + "px";
  box.style.top  = (coords.top  - 2) + "px";
  box.style.display = "block";
}
function getLineIndent(line){ const m = line.match(/^\s*/); return m ? m[0] : ""; }
function proposeNext(cm){
  const code = cm.getValue();
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line) || "";
  const before = line.slice(0, cur.ch);
  const after  = line.slice(cur.ch);
  if(after.trim().length) return "";
  if(before.trim().startsWith("#")) return "";
  const indent = getLineIndent(line);

  if (/^\s*(if|elif|for|while)\b/.test(before) && !before.trimEnd().endsWith(":")) {
    if(before.trim().length >= 2) return ":\n" + indent + "    ";
  }
  if(before.trim() === "") {
    const snips = current.snips || [];
    for(const s of snips){
      const needle = s.d.replace(/\s+/g," ").trim();
      if(needle && !code.replace(/\s+/g," ").includes(needle)) return s.t;
    }
    if(current.input !== "(không có)" && !/input\s*\(/.test(code)) return "n = int(input().strip())\n";
    if(!/print\s*\(/.test(code)) return "print()\n";
  }
  const m = before.match(/[A-Za-z_][A-Za-z0-9_]*$/);
  const word = m ? m[0] : "";
  const templ = {
    "pri":"print()","print":"print()","inp":"input()","input":"input()",
    "for":"for i in range(1, n + 1):\n" + indent + "    ",
    "while":"while condition:\n" + indent + "    ",
    "if":"if condition:\n" + indent + "    ",
    "elif":"elif condition:\n" + indent + "    "
  };
  for(const k of Object.keys(templ)) {
    if(word && k.startsWith(word)) {
      const full = templ[k];
      return full.startsWith(word) ? full.slice(word.length) : full;
    }
  }
  return "";
}
function computeRemainder(cm){
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line) || "";
  const before = line.slice(0, cur.ch);
  const sug = proposeNext(cm);
  if(!sug) return "";
  if(sug.startsWith(before)) return sug.slice(before.length);
  return sug;
}
function updateInlineGhost(cm){
  const now = Date.now();
  if(now - ghost.lastShown < 140) return;
  ghost.lastShown = now;
  if(thinkMode && guardStage !== 4) { hideGhost(); return; }
  const rem = computeRemainder(cm);
  if(!rem) { hideGhost(); return; }
  showGhostAt(cm, rem.replace(/\n/g,"↵ "));
}

/* ---- Guard chips ---- */

function _scanSignals(code){
  const c = String(code||"");
  const lc = c.toLowerCase();
  return {
    hasInput: /\binput\s*\(/.test(lc),
    hasParse: /\bmap\s*\(|\bint\s*\(|\bfloat\s*\(|\.split\s*\(/.test(lc),
    hasPrint: /\bprint\s*\(/.test(lc),
    hasIf: /\bif\b/.test(lc),
    hasLoop: /\bfor\b|\bwhile\b/.test(lc),
    hasMod: /%/.test(c),
    hasDef: /\bdef\b/.test(lc)
  };
}
function _algoKey(lesson){
  const hay = ((lesson?.id||"") + " " + (lesson?.title||"") + " " + (lesson?.text||"") + " " + (lesson?.skill||"")).toLowerCase();
  if(hay.includes("nguyên tố") || hay.includes("prime")) return "prime";
  if(hay.includes("ucln") || hay.includes("bcnn") || hay.includes("gcd") || hay.includes("lcm") || hay.includes("euclid")) return "gcdlcm";
  if(hay.includes("tổng chữ số")) return "sumdigits";
  if(hay.includes("năm nhuận")) return "leapyear";
  if(hay.includes("giai thừa")) return "factorial";
  if(/tổng\s*1\.\.n|từ\s*1\s*đến\s*n/.test(hay)) return "sum1n";
  return "";
}
function _algoTier1(key){
  if(key==="prime"){
    return [
      "Đầu vào: đọc n (số nguyên).",
      "Nếu n < 2 → kết luận NO (không phải số nguyên tố).",
      "Duyệt i từ 2 đến √n: nếu n % i == 0 → NO (có ước).",
      "Nếu không tìm thấy ước nào → YES."
    ];
  }
  if(key==="gcdlcm"){
    return [
      "Đầu vào: đọc a, b. Lưu a0=a, b0=b để tính BCNN.",
      "UCLN (Euclid): while b != 0: a, b = b, a % b.",
      "Sau vòng lặp: UCLN = a.",
      "BCNN = a0*b0//UCLN (cẩn thận dùng trị tuyệt đối nếu cần)."
    ];
  }
  if(key==="sumdigits"){
    return [
      "Đầu vào: đọc n.",
      "Xử lý: lặp while n>0: lấy digit = n%10, cộng vào tổng, rồi n//=10.",
      "Trường hợp n=0 → tổng = 0.",
      "Đầu ra: print(tổng)."
    ];
  }
  if(key==="leapyear"){
    return [
      "Đọc y.",
      "Nếu y%400==0 → YES.",
      "Ngược lại nếu y%4==0 và y%100!=0 → YES.",
      "Còn lại → NO."
    ];
  }
  return [];
}
function _algoFrames(key){
  if(key==="prime"){
    return [
      {d:"Khung thuật toán nguyên tố", t:
`# B1) n < 2 -> NO
# B2) thử i=2..isqrt(n)
import math
n = int(input())
if n < 2:
    print("NO")
else:
    r = int(math.isqrt(n))
    # TODO: giả sử là nguyên tố
    for i in range(2, r+1):
        if n % i == 0:
            # TODO: kết luận NO và dừng
            ...
    # TODO: nếu không rơi vào trường hợp chia hết -> YES
` }
    ];
  }
  if(key==="gcdlcm"){
    return [
      {d:"Khung Euclid (UCLN/BCNN)", t:
`a, b = map(int, input().split())
a0, b0 = a, b
# UCLN bằng Euclid
while b != 0:
    a, b = b, a % b
g = a
# TODO: in UCLN và BCNN
# l = a0*b0//g
` }
    ];
  }
  return [];
}
function _algoCloze(key){
  if(key==="prime"){
    return [
      {d:"Nguyên tố (điền khuyết)", t:
`n = int(input())
if n < ____:
    print("NO")
else:
    import math
    r = int(math.isqrt(n))
    ok = True
    for i in range(2, r+1):
        if n % i == ____:
            ok = False
            break
    print("YES" if ok else "NO")
` }
    ];
  }
  if(key==="gcdlcm"){
    return [
      {d:"UCLN/BCNN (điền khuyết)", t:
`a, b = map(int, input().split())
a0, b0 = a, b
while b != ____:
    a, b = b, a % b
g = a
print(g)
print(a0*b0 // ____)
` }
    ];
  }
  return [];
}

function stageIdea(){
  // 1) Nếu bài có phân tích AI (bài tự tạo): ưu tiên tầng 1 từ phân tích
  if(current && current.analysis && Array.isArray(current.analysis.tier1) && current.analysis.tier1.length){
    const out = [];
    if(lastRunError && lastRunError.trim()){
      out.push("Ưu tiên 1: đọc lỗi và sửa đúng dòng bị báo lỗi trước (tránh viết tiếp khi chương trình chưa chạy).");
    }
    current.analysis.tier1.slice(0,3).forEach(x=>out.push(x));
    return out;
  }

  const key = _algoKey(current);
  const code = editor.getValue();
  const sig = _scanSignals(code);

  // 2) Nếu là bài có thuật toán đặc thù (nguyên tố/UCLN...): gợi ý theo đúng thuật toán nhưng theo dạng bước (không đưa full code)
  const algo = _algoTier1(key);
  if(algo && algo.length){
    // Nếu chưa viết gì thì đưa 3-4 bước chuẩn
    if(_nonCommentLineCount(code) === 0) return algo;
    // Nếu đã viết nhưng thiếu phần trọng yếu thì ưu tiên nhắc phần thiếu
    if(key==="prime" && !sig.hasMod) return ["Thiếu phép % để kiểm tra chia hết (n % i).", ...algo.slice(1,4)];
    if(key==="gcdlcm" && !sig.hasLoop) return ["Thiếu vòng lặp while cho Euclid (while b != 0).", ...algo.slice(1,4)];
    return algo.slice(0,3);
  }

  // 3) Mặc định: dựa theo trạng thái code
  if(!sig.hasInput && !sig.hasPrint) return ["Bắt đầu bằng cách viết lại yêu cầu đề bằng 1 câu ngắn.", "Xác định rõ Input/Output rồi mới code."];
  if(current.input !== "(không có)" && !sig.hasInput) return ["Thiếu phần đọc dữ liệu vào. Em cần input() / split() / int(...) đúng định dạng đề."];
  if(!sig.hasPrint) return ["Thiếu phần in kết quả. Em cần print(...) đúng theo Output của đề."];
  if(lastRunError && lastRunError.trim()) return ["Em đang có lỗi khi chạy. Đọc lỗi, sửa lỗi trước rồi hãy tiếp tục."];
  return ["Viết ý tưởng theo 3 phần: Input → Process → Output.", "Tách bài thành bước nhỏ (1 bước = 1 dòng) rồi mới code."];
}

function stageFrame(){
  const suggestions = [];

  // 1) Bài tự tạo: thêm khung theo phân tích đề (tầng 2)
  if(current && current.analysis && Array.isArray(current.analysis.frames)){
    current.analysis.frames.slice(0,4).forEach(f=>{
      if(f && (f.d||f.t)) suggestions.push({d: f.d || "Khung", t: f.t || ""});
    });
  }

  // 2) Khung "bám sát thuật toán" theo từng bài (nguyên tố/UCLN...)
  const key = _algoKey(current);
  _algoFrames(key).forEach(x=> suggestions.push(x));

  // 3) Khung mặc định theo tình trạng code hiện tại
  const code = editor.getValue();
  const sig = _scanSignals(code);

  if(current.input !== "(không có)" && !sig.hasInput){
    suggestions.push({d:"Khung đọc input", t:`data = input().strip()
# TODO: tách/ép kiểu theo đề
`});
  }
  if(sig.hasInput && !sig.hasParse){
    suggestions.push({d:"Nhắc ép kiểu", t:`# TODO: nếu đề yêu cầu số, dùng int(...) hoặc float(...)
`});
  }
  if(!sig.hasPrint){
    suggestions.push({d:"Khung in output", t:`# TODO: print(...) đúng định dạng đề
`});
  }

  // chống lạm dụng: không đưa khung quá dài / quá nhiều
  return suggestions.slice(0,6);
}

function stageCloze(){
  const out = [];

  // Bài tự tạo: dùng mẫu điền khuyết theo phân tích (tầng 3)
  if(current && current.analysis && Array.isArray(current.analysis.cloze) && current.analysis.cloze.length){
    current.analysis.cloze.slice(0,4).forEach(x=>{
      out.push({d: x.d || "Điền khuyết", t: x.t || ""});
    });
    return out;
  }

  // 2) Cloze bám sát thuật toán theo từng bài
  const key = _algoKey(current);
  const algoC = _algoCloze(key);
  if(algoC && algoC.length){
    algoC.slice(0,4).forEach(x=> out.push({d: x.d, t: x.t}));
    return out;
  }

  // 3) Mặc định theo bài có sẵn
  if(current.id==="A1") out.push({d:"Hello", t:"print(____)\n"});
  if(current.id==="A2") out.push({d:"Tổng 2 số", t:"a, b = map(int, input().split())\nprint(a ____ b)\n"});
  if(current.id==="A3") out.push({d:"Diện tích", t:"r = float(input())\nprint(____ * r * r)\n"});
  if(current.id==="B1") out.push({d:"Nếu… thì…", t:"x = int(input())\nif x ____ 0:\n    print('...')\nelse:\n    print('...')\n"});
  if(current.id==="B2") out.push({d:"Vòng lặp", t:"n = int(input())\ns = 0\nfor i in range(____):\n    s += ____\nprint(s)\n"});
  if(current.id==="C1") out.push({d:"List", t:"arr = list(map(int, input().split()))\nprint(max(arr))\n"});
  return out.length? out : [{d:"Khung chung", t:"# TODO: Input → Process → Output\n"}];
}
function stageFullLine(){
  const list = [];
  const rem = computeRemainder(editor);
  if(rem) list.push({label:"Hoàn thiện tại con trỏ (Tab)", text:""});
  (current.snips || []).slice(0,4).forEach(s=> list.push({label:s.d, text:s.t}));
  return list;
}
function insertAtCursor(text){
  const cur = editor.getCursor();
  editor.replaceRange(text, cur);
  editor.focus();
}
function renderGuardChips(){
  const box = el("guardChips");
  box.innerHTML = "";
  let items = [];
  if(guardStage === 1) items = stageIdea().map(x=>({label:x, text:""}));
  else if(guardStage === 2) items = stageFrame();
  else if(guardStage === 3) items = stageCloze();
  else items = stageFullLine();

  items.slice(0,7).forEach(it=>{
    const b = document.createElement("button");
    b.className = "chipBtn";
    b.textContent = it.label;
    b.onclick = ()=>{
      if(guardStage === 1) {
        toast("💡 " + it.label);
        logEvent("hint", { detail: "stage1" });
        thinkScore += 0.2; updateScoreUI();
        return;
      }
      if(guardStage === 4 && thinkMode) {
        if(!canAcceptSuggestion(editor)) {
          toast("🧠 Hãy tự gõ thêm (≥ 6 ký tự/dòng) hoặc Run/Test rồi mới dùng Hoàn thiện dòng.");
          logEvent("hint_blocked", { detail: "stage4_block" });
          thinkScore = Math.max(0, thinkScore - 0.5); updateScoreUI();
          return;
        }
      }
      if(it.text) {
        insertAtCursor(it.text);
        logEvent("hint", { detail: "stage"+guardStage });
        if(guardStage >= 3) noteAccept();
        else thinkScore += 0.2;
        updateScoreUI();
      } else {
        toast("👉 Nhấn Tab để chèn ghost tại con trỏ.");
      }
      updateInlineGhost(editor);
    };
    box.appendChild(b);
  });
}
function updateGuard(){
  const msg = {
    1: "Tầng 1: Chỉ nêu mục tiêu bước tiếp theo (không đưa code).",
    2: "Tầng 2: Đưa khung câu lệnh (bạn tự điền chi tiết).",
    3: "Tầng 3: Điền khuyết (bạn hoàn thiện chỗ ___).",
    4: "Tầng 4: Hoàn thiện dòng (mạnh nhất, có Think-Guard)."
  }[guardStage];
  el("guardText").textContent = msg;
  renderGuardChips();
}

/* =========================================================
   8) EVENTS + INIT EDITOR
   ========================================================= */
function bindEvents(){
  el("lessonHeader").onclick = ()=> toggleLessonDrop();
  document.addEventListener("click", (e)=>{
    const dropOpen = el("lessonDrop").classList.contains("open");
    if(dropOpen && !e.target.closest("#lessonHeader") && !e.target.closest("#lessonDrop")) toggleLessonDrop(false);
  });
  el("lessonSearch").addEventListener("input", renderLessonList);
  const lf = el("levelFilter");
  if(lf) lf.addEventListener("change", renderLessonList);
  el("btnFocus").onclick = toggleFocus;
  el("autoTog").onclick = ()=>{
    autoSuggest = !autoSuggest;
    el("autoTog").classList.toggle("on", autoSuggest);
    el("autoTog").setAttribute("aria-checked", autoSuggest ? "true" : "false");
    toast(autoSuggest ? "🤖 Bật tự gợi ý" : "🧠 Tắt tự gợi ý");
  };
  el("thinkTog").onclick = ()=>{
    thinkMode = !thinkMode;
    el("thinkTog").classList.toggle("on", thinkMode);
    el("thinkTog").setAttribute("aria-checked", thinkMode ? "true" : "false");
    toast(thinkMode ? "🧠 Bật Tư duy" : "⚡ Tắt Tư duy");
    updateGuard();
    updateInlineGhost(editor);
  };
  document.querySelectorAll(".stage").forEach(btn=>{
    btn.onclick = ()=>{
      document.querySelectorAll(".stage").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      guardStage = parseInt(btn.dataset.stage, 10);
      updateGuard();
      updateInlineGhost(editor);
      logEvent("stage", { detail: "stage="+guardStage });
    };
  });

  el("btnRun").onclick = async ()=>{
    const code = editor.getValue();
    const stdin = el("stdin").value;
    clearErrorHighlight();
    el("console").textContent = "▶ Đang chạy...\n";
    const r = await runPython(code, stdin);
    lastRunOrTestTs = Date.now();
    lastRunError = (r.error || "");
    lastTestsResult = "";

    if(r.error && r.error.trim()) {
      el("console").textContent = "❌ Lỗi:\n" + r.error;
      toast("❌ Có lỗi — xem Output/Lỗi");
      const ln = extractErrorLine(r.error);
      if(ln) highlightErrorLine(ln);
      logEvent("run", { ok:false, errorLine: ln || "", errorType: extractErrorType(r.error), errorMsg: String(r.error||"").slice(-220) });
      thinkScore = Math.max(0, thinkScore - 1);
      updateScoreUI();
      document.querySelector('.tab[data-tab="coach"]').click();
    } else {
      el("console").textContent = r.stdout || "(không có output)\n";
      toast("✅ Run xong");
      logEvent("run", { ok:true });
      thinkScore += 0.4;
      updateScoreUI();
    }
    updateCoach();
    updateGuard();
    updateInlineGhost(editor);
  };

  el("btnTest").onclick = ()=>{ try{ window.runTests && window.runTests(); }catch(e){} };
  el("btnClear").onclick = ()=>{
    el("console").textContent = "";
    lastRunError = "";
    lastTestsResult = "";
    clearErrorHighlight();
    updateCoach(); updateGuard(); updateInlineGhost(editor);
    toast("🧹 Đã xóa output");
    logEvent("clear", {});
  };
  el("btnSample").onclick = ()=>{ el("stdin").value = current.sampleIn || ""; toast("📌 Đã nạp input mẫu"); logEvent("sample", {}); };
  el("btnScaffold").onclick = ()=>{ const cur=editor.getValue().trim(); if(cur){ if(!confirm("Nạp khung sẽ ghi đè phần đang viết. Bạn có chắc?")) return; } editor.setValue(current.scaffold); updateCoach(); updateGuard(); updateInlineGhost(editor); toast("🧩 Đã nạp khung"); logEvent("scaffold", {}); };
  el("btnSave").onclick = saveProgress;
  el("btnExport").onclick = exportCSV;

  // --- Tự ra đề ---
  if(el("btnCpAnalyze")) el("btnCpAnalyze").onclick = doCpAnalyze;
  if(el("btnCpCreate")) el("btnCpCreate").onclick = doCpCreateAndOpen;
  if(el("btnCpClear"))  el("btnCpClear").onclick  = clearCpDraft;

  // Tự lưu nháp khi gõ
  ["cpTitle","cpText","cpInput","cpOutput","cpSampleIn","cpSampleOut","cpLevel"].forEach(id=>{
    const node = el(id);
    if(!node) return;
    node.addEventListener("input", ()=>{ try{ saveCpDraft(); }catch(e){} });
    node.addEventListener("change", ()=>{ try{ saveCpDraft(); }catch(e){} });
  });

  el("levelSel").onchange = ()=> { updateCoach(); updateGuard(); };
  el("btnLogout").onclick = ()=>{
    localStorage.removeItem(SESSION_KEY);
    location.reload();
  };

  window.addEventListener("keydown", (e)=>{
    if((e.ctrlKey || e.metaKey) && e.key === "Enter"){ e.preventDefault(); if(!el("btnRun").disabled) el("btnRun").click(); }
    if((e.ctrlKey || e.metaKey) && e.code === "Space"){ e.preventDefault(); CodeMirror.showHint(editor, customPythonHint, {completeSingle:false, extraKeys: HINT_EXTRA_KEYS}); }
  });
}
function initEditor(){
  // CodeMirror có thể fail (CDN bị chặn, load chậm, cache lỗi...).
  // Nếu fail: rơi về textarea thường để hệ thống vẫn chạy (không treo "Đang tải Python").
  try{
    if(!window.CodeMirror) throw new Error("CodeMirror chưa sẵn sàng");
    editor = CodeMirror.fromTextArea(el("code"), {
      mode: "python",
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      extraKeys: {
        "Ctrl-Space": function(cm){ CodeMirror.showHint(cm, customPythonHint, {completeSingle:false, extraKeys: HINT_EXTRA_KEYS}); },
        "Tab": function(cm){
          if(ghost.active){
            if(!canAcceptSuggestion(cm)){
              toast("🧠 Hãy tự gõ thêm (≥ 6 ký tự/dòng) hoặc Run/Test rồi mới dùng Hoàn thiện dòng.");
              logEvent("ghost_blocked", { detail: "blocked" });
              thinkScore = Math.max(0, thinkScore - 0.5);
              updateScoreUI();
              return;
            }
            const real = computeRemainder(cm).replace(/↵/g,"\n");
            cm.replaceRange(real, cm.getCursor());
            noteAccept();
            hideGhost();
            logEvent("ghost_accept", { detail: "accept" });
            updateGuard();
            return;
          }
          cm.execCommand("indentMore");
        },
        "Esc": function(cm){ hideGhost(); cm.execCommand("singleSelection"); }
      }
    });

    // expose để các patch UI có thể kích hoạt gợi ý/điều khiển mà không đổi logic
    try{ window.__editor = editor; window.editor = editor; window.__customPythonHint = customPythonHint; }catch(e){}

    editor.on("change", (cm, changeObj)=>{
      localStorage.setItem(`py10:draft:${user.id}:${current.id}`, editor.getValue());
      if(changeObj && changeObj.origin === "+input") noteManualTyping();
      if(!autoSuggest){ updateGuard(); updateInlineGhost(editor); return; }
      clearTimeout(suggestTimer);
      suggestTimer = setTimeout(()=>{ updateCoach(); updateGuard(); updateInlineGhost(editor); }, 1300);
    });

    editor.on("cursorActivity", ()=>{ updateGuard(); updateInlineGhost(editor); });
    editor.on("inputRead", (cm, changeObj)=>{ maybeAutoComplete(cm, changeObj); updateInlineGhost(cm); });
    ensureGhostEl();
  }catch(e){
    console.error("initEditor fallback:", e);
    const ta = el("code");
    // tạo API giả giống CodeMirror tối thiểu
    editor = {
      getValue(){ return ta.value || ""; },
      setValue(v){ ta.value = v ?? ""; },
      focus(){ ta.focus(); },
      on(){ /* no-op */ },
      execCommand(){ /* no-op */ },
      getCursor(){ return {line:0, ch:0}; },
      replaceRange(text){
        const start = ta.selectionStart ?? ta.value.length;
        const end = ta.selectionEnd ?? ta.value.length;
        ta.value = ta.value.slice(0,start) + text + ta.value.slice(end);
        const pos = start + (text?.length||0);
        ta.setSelectionRange(pos,pos);
      }
    };
    ta.addEventListener("input", ()=>{
      localStorage.setItem(`py10:draft:${user.id}:${current.id}`, editor.getValue());
      noteManualTyping();
      if(autoSuggest){
        clearTimeout(suggestTimer);
        suggestTimer = setTimeout(()=>{ updateCoach(); updateGuard(); }, 1300);
      }else{
        updateGuard();
      }
    });
  }
}

/* =========================================================
   10) BOOT
   ========================================================= */

// external helper for Todo button (click "Làm ngay")
window.__openLesson = function(lessonId){
  const l = LESSONS.find(x=>x.id===lessonId);
  if(!l) return;
  if(!isUnlocked(l.id)){ toast("🔒 Bài này đang khóa. Hãy PASS bài trước để mở."); return; }
  current = l;
  try{ window.current = current; }catch(e){}
  setPickedLessonUI();
  renderTask();
  loadProgressFor(l);
  renderLessonList();
  updateCoach();
  updateGuard();
  toggleLessonDrop(false);
  logEvent("assignment_open", { id:l.id });
};

function bootApp(){
  // Không để app chết giữa chừng (sẽ treo "Đang tải Python...").
  try{
    initTabs();

  // Nạp bài tự tạo của học sinh + khôi phục nháp
  loadCustomLessons();
  restoreCpDraft();
  renderMyCustomList();

  // 1) Ưu tiên mở bài đang được giao (nếu có)
  const allAs = getAssignments().filter(a => a && a.active !== false);
  const mineAs = allAs.filter(a => assignmentMatchesStudent(a, user));
  const pendingAs = mineAs
    .filter(a => !isDoneForAssignment(a))
    .sort((a,b)=> String(a.due||"9999").localeCompare(String(b.due||"9999")))[0] || null;

  // 2) Nếu không có bài giao: mở bài gần nhất học sinh học dở
  const last = localStorage.getItem(`py10:last:${user.id}`);
  const lastLesson = LESSONS.find(x=>x.id===last);

  // 3) Nếu vẫn chưa có: chọn bài chưa PASS đầu tiên trong lộ trình (bài mặc định)
  const defaultLesson = (()=>{
    for(const l of LESSONS){
      if(isUnlocked(l.id) && !progress.passed[l.id]) return l;
    }
    for(const l of LESSONS){
      if(isUnlocked(l.id)) return l;
    }
    return LESSONS[0];
  })();

  if(pendingAs){
    const l = LESSONS.find(x=>x.id===pendingAs.lessonId);
    if(l && isUnlocked(l.id)) current = l;
  } else if(lastLesson && isUnlocked(lastLesson.id)){
    current = lastLesson;
  } else if(defaultLesson){
    current = defaultLesson;
  }

  setPickedLessonUI();
  renderLessonList();
  renderTask();
  updateScoreUI();
  updateLogView();

    initEditor();
  bindEvents();

  const saved = localStorage.getItem(`py10:${user.id}:${current.id}`);
  const draft = localStorage.getItem(`py10:draft:${user.id}:${current.id}`);
  editor.setValue((saved && saved.trim()) ? saved : (draft && draft.trim() ? draft : blankStarter(current)));

  el("stdin").value = current.sampleIn || "";
  updateCoach();
  updateGuard();

  // Hiển thị "Bài tập cần làm ngay" ngay khi vào (không cần bấm gì thêm)
  renderStudentTodo();

    // luôn gọi init runtime kể cả khi phía trên có lỗi nhỏ
    initPyodide();

    // Watchdog: nếu sau 4 giây vẫn chưa sẵn sàng -> ép dùng Skulpt và bật nút.
    setTimeout(()=>{
      try{
        if(window.__PY_READY__) return;
        // thử lại Skulpt (đề phòng script load chậm)
        if(window.Sk && typeof window.Sk.configure === "function"){
          // dùng lại logic trong initSkulptRuntime (nhưng không phụ thuộc devHost)
          if(!window.Sk.__configured){
            window.Sk.configure({
              output: (t)=>{},
              read: (x)=>{
                if(window.Sk.builtinFiles && window.Sk.builtinFiles.files[x]) return window.Sk.builtinFiles.files[x];
                throw `File not found: '${x}'`;
              }
            });
            window.Sk.__configured = true;
          }
          pyRuntime = "skulpt";
          el("pyStatus").textContent = "Python sẵn sàng";
          el("btnRun").disabled = false;
          el("btnTest").disabled = false;
          window.__PY_READY__ = true;
        }else{
          // ít nhất bỏ trạng thái treo để người dùng thấy lỗi rõ
          el("pyStatus").textContent = "Python chưa sẵn sàng (kiểm tra tải thư viện)";
        }
      }catch(err){ console.error("watchdog error", err); }
    }, 4000);
  }catch(err){
    console.error("bootApp error:", err);
    try{
      el("pyStatus").textContent = "Lỗi khởi động (mở Console để xem)";
      el("out").textContent = "Lỗi khởi động: " + (err?.message || err);
    }catch(_){ }
    // cố gắng vẫn bật runtime nếu có thể
    try{ initPyodide(); }catch(_){ }
  }
}

bootApp();

} // end logged-in
