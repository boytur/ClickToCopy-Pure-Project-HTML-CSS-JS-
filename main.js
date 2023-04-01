const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

//Creat Evenlistener
btn.addEventListener("click",(e)=>{
    coupon.select()
    coupon.setSelectionRange(0,99)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = "Copied"
})

