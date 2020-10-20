let radioGroup = document.getElementsByName("optradio");
let txtMsg = document.getElementById("txtMsg");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

num1.addEventListener("blur", function () {
    if (isNaN(num1.value)) {
        txtMsg.innerHTML = "Giá trị nhập ở ô <i>số thứ nhất</i> không phải là số."
    }
    else {
        txtMsg.innerHTML = "";
    }
});

num2.addEventListener("blur", function () {
    if (isNaN(num2.value)) {
        txtMsg.innerHTML = "Giá trị nhập ở ô <i>số thứ hai</i> không phải là số."
    }
    else {
        txtMsg.innerHTML = "";
    }

});

document.getElementById("btn-calculating").addEventListener("click", calculating);

function calculating() {
    if (isNaN(num1.value) || isNaN(num2.value)) {
        txtMsg.innerHTML = "Chưa điền đủ 2 số hợp lệ để thực hiện phép tính";
    }
    else {
        let valueNum1 = parseFloat(num1.value);
        let valueNum2 = parseFloat(num2.value);
        let txtResult = document.getElementById("txtResult");
        let typeOfCalculating = 0;

        for (let i = 0; i < radioGroup.length; i++) {
            if (radioGroup[i].checked) {
                typeOfCalculating = parseInt(radioGroup[i].value);
            }
        }

        switch (typeOfCalculating) {
            case 1:
                txtResult.value = valueNum1 + valueNum2;
                txtMsg.innerHTML = "";
                break;
            case 2:
                txtResult.value = valueNum1 - valueNum2;
                txtMsg.innerHTML = "";
                break;
            case 3:
                txtResult.value = valueNum1 * valueNum2;
                txtMsg.innerHTML = "";
                break;
            case 4:
                if (valueNum2 === 0) {
                    txtMsg.innerHTML = "Không hợp lệ (mẫu số phải khác 0)";
                }
                else {
                    txtResult.value = valueNum1 / valueNum2;
                    txtMsg.innerHTML = "";
                }
                break;
            default:
                txtMsg.innerHTML = "Chưa chọn phép tính"
                break;
        }
    }
}
