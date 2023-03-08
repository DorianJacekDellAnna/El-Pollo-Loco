class DrawableObjects {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    /**
     * This function load the insert image
     * @param {image path} path - this is the path to load 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
     * This function draws the image on the right place 
     * @param {context} ctx - this is the context to draw
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    /**
     * This function loads the images from array
     * @param {array} arr - this is the array from which the pictures are beeing loaded 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
    /**
     * This function draws a frame around the respective context  
     * @param {context} ctx - this is the context to draw the frame
     */
    drawFrame(ctx) {
        if (this instanceof Chicken || this instanceof Endboss || this instanceof JumpingChicken) {
            ctx.lineWidth = "1";
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
    /**
     * This function draws a frame around the character
     * @param {context} ctx - this is the context to draw the frame
     */
    drawFrameCharacter(ctx) {
        if (this instanceof Character) {
            ctx.lineWidth = "1";
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(this.x, this.y + 100, this.width, this.height - 100);
            ctx.stroke();
        }
    }
    /**
     * This function draws a frame around the bottle
     * @param {context} ctx - this is the context to draw the frame
     */
    drawFrameCoinAndBottle(ctx) {
        if (this instanceof Coin || this instanceof Bottle) {
            ctx.lineWidth = "1";
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.rect(this.x + 30, this.y + 30, this.width - 60, this.height - 60);
            ctx.stroke();
        }
    }
    /**
     * This function draws a frame around the throwable object
     * @param {context} ctx - this is the context to draw the frame
     */
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