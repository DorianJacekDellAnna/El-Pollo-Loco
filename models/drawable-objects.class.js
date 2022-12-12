class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawFrame(ctx) {
        if (this instanceof Chicken || this instanceof Endboss || this instanceof JumpingChicken) {
            ctx.lineWidth = "1";
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawFrameCharacter(ctx) {
        if (this instanceof Character) {
            ctx.lineWidth = "1";
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y+100, this.width, this.height-100);
            ctx.stroke();
        }
    }

    drawFrameCoinAndBottle(ctx) {
        if (this instanceof Coin || this instanceof Bottle) {
            ctx.lineWidth = "1";
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(this.x + 30, this.y +30, this.width - 60, this.height - 60);
            ctx.stroke();
        }
    }

    drawFrameThrowableObject(ctx) {
        if (this instanceof ThrowableObject) {
            ctx.lineWidth = "1";
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}