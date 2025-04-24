document.addEventListener('DOMContentLoaded', () => {
    // Initialize font containers and previews
    const fontContainers = document.querySelectorAll('.font-container');
    const textInput = document.querySelector('.text-input');
    const previews = document.querySelectorAll('.preview-text');
    
    // Set default text
    const defaultText = 'Font Brutalist\n\nA showcase of variable fonts\nwith dynamic controls\n\nTry adjusting the sliders\nto see the changes in real-time\n\nEach font has its own\nunique characteristics\nand variation axes';
    textInput.value = defaultText;
    
    // Initialize previews with proper font families and styles
    previews.forEach(preview => {
        const container = preview.closest('.font-container');
        if (container.id === 'block-font') {
            preview.style.fontFamily = 'Block';
        } else if (container.id === 'hertz-font') {
            preview.style.fontFamily = 'Hertz';
        } else if (container.id === 'motion-font') {
            preview.style.fontFamily = 'Motion';
        } else if (container.id === 'lean-font') {
            preview.style.fontFamily = 'Lean';
        }
        
        // Set initial styles
        preview.style.fontSize = '24px';
        preview.style.color = '#000';
        preview.style.opacity = '1';
        preview.style.visibility = 'visible';
        preview.textContent = defaultText;
    });
    
    // Handle text input changes
    textInput.addEventListener('input', () => {
        const newText = textInput.value || defaultText;
        previews.forEach(preview => {
            preview.textContent = newText;
            preview.style.visibility = 'visible';
        });
    });
    
    // Handle font size changes
    fontContainers.forEach(container => {
        const sizeSlider = container.querySelector('.size-slider');
        const preview = container.querySelector('.preview-text');
        
        sizeSlider.addEventListener('input', () => {
            preview.style.fontSize = `${sizeSlider.value}px`;
        });
        
        // Initialize font size
        preview.style.fontSize = `${sizeSlider.value}px`;
    });
    
    // Handle weight changes for Hertz font
    const hertzContainer = document.getElementById('hertz-font');
    const hertzWeightSlider = hertzContainer.querySelector('.weight-slider');
    const hertzPreview = hertzContainer.querySelector('.preview-text');
    const hertzWeightValue = hertzContainer.querySelector('.weight-value');
    
    hertzWeightSlider.addEventListener('input', () => {
        const weight = hertzWeightSlider.value;
        const weightValue = weight / 2; // Scale the value
        hertzPreview.style.setProperty('font-variation-settings', `"wght" ${weightValue}`);
        hertzPreview.style.setProperty('-webkit-font-variation-settings', `"wght" ${weightValue}`);
        hertzPreview.style.setProperty('-moz-font-variation-settings', `"wght" ${weightValue}`);
        hertzWeightValue.textContent = weight;
    });
    
    // Initialize Hertz weight
    const initialWeight = hertzWeightSlider.value;
    const initialWeightValue = initialWeight / 2;
    hertzPreview.style.setProperty('font-variation-settings', `"wght" ${initialWeightValue}`);
    hertzPreview.style.setProperty('-webkit-font-variation-settings', `"wght" ${initialWeightValue}`);
    hertzPreview.style.setProperty('-moz-font-variation-settings', `"wght" ${initialWeightValue}`);
    hertzWeightValue.textContent = initialWeight;
    
    // Handle weight changes for Motion font
    const motionContainer = document.getElementById('motion-font');
    const motionWeightSlider = motionContainer.querySelector('.weight-slider');
    const motionPreview = motionContainer.querySelector('.preview-text');
    const motionWeightValue = motionContainer.querySelector('.weight-value');
    
    motionWeightSlider.addEventListener('input', () => {
        motionPreview.style.fontVariationSettings = `"wght" ${motionWeightSlider.value}`;
        motionWeightValue.textContent = motionWeightSlider.value;
    });
    
    // Initialize Motion weight
    motionPreview.style.fontVariationSettings = `"wght" ${motionWeightSlider.value}`;
    motionWeightValue.textContent = motionWeightSlider.value;
    
    // Handle Lean font parameters
    const leanContainer = document.getElementById('lean-font');
    const leanWidthSlider = leanContainer.querySelector('.width-slider');
    const leanWeightSlider = leanContainer.querySelector('.weight-slider');
    const leanTiltSlider = leanContainer.querySelector('.tilt-slider');
    const leanPreview = leanContainer.querySelector('.preview-text');
    const leanWidthValue = leanContainer.querySelector('.width-value');
    const leanWeightValue = leanContainer.querySelector('.weight-value');
    const leanTiltValue = leanContainer.querySelector('.tilt-value');
    
    // Update Lean font variation settings
    const updateLeanSettings = () => {
        const width = leanWidthSlider.value;
        const weight = leanWeightSlider.value;
        const tilt = leanTiltSlider.value;
        // Convert width percentage to a value between 0 and 1000
        const widthValue = (width - 50) * (1000 / 150); // Scale 50-200 to 0-1000
        leanPreview.style.fontVariationSettings = `"wdth" ${widthValue}, "wght" ${weight}, "tilt" ${tilt}`;
        leanWidthValue.textContent = `${width}%`;
        leanWeightValue.textContent = weight;
        leanTiltValue.textContent = `${tilt}°`;
    };
    
    leanWidthSlider.addEventListener('input', updateLeanSettings);
    leanWeightSlider.addEventListener('input', updateLeanSettings);
    leanTiltSlider.addEventListener('input', updateLeanSettings);
    
    // Initialize Lean font settings
    updateLeanSettings();
    
    // Handle download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const fontName = button.dataset.font;
            const link = document.createElement('a');
            link.href = fontName;
            link.download = fontName;
            link.click();
        });
    });
}); 