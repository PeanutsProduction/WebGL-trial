function Initialize() {

    const canvas = document.querySelector("#gl-canvas"); // Get canvas by id (i think)

    const gl = canvas.getContext("webgl"); // Initialize the GL context

    // Only continue if WebGL is available and working
    if (gl == null){
        alert(
            "Unable to initialize WebGL. Your browser or machine may not support it.",
        );
        return;
    }
    
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}
