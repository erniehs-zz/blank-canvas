var ctx = document.getElementById("grid").getContext("2d")

const resize = () => {
    ctx.canvas.width = ctx.canvas.parentElement.clientWidth
    ctx.canvas.height = ctx.canvas.parentElement.clientHeight
}

const draw = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.strokeStyle = "red"
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.moveTo(0, 0)
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height)
    ctx.moveTo(0, ctx.canvas.height)
    ctx.lineTo(ctx.canvas.width, 0)
    ctx.stroke()
}

window.addEventListener("load", () => {
    resize()
    draw()
})

window.addEventListener("resize", () => {
    resize()
    draw() // TODO throttle
})
