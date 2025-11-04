// =============================================
// Week 7 Assignment: CSS Animations & JavaScript Functions
// =============================================

// ============================================================================
// Global Variables (Demonstrating Scope)
// ============================================================================

/**
 * Global variables are accessible throughout the entire script
 * These demonstrate global scope
 */
const GLOBAL_APP_NAME = "Animation Demo";
let globalCounter = 0;
const globalColors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];

// ============================================================================
// PART 2: JavaScript Functions - Scope, Parameters & Return Values
// ============================================================================

/**
 * Initializes all functionality when the DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Week 7 Assignment Loaded Successfully!');
    console.log('Global App Name:', GLOBAL_APP_NAME);
    
    initializePart2Functions();
    initializePart3Integration();
});

/**
 * PART 2: Function Demonstrations
 */
function initializePart2Functions() {
    console.log('📚 Initializing Part 2: JavaScript Functions...');
    
    // Scope demonstration button
    document.getElementById('scopeDemo').addEventListener('click', demonstrateScope);
    
    // Initialize animation speed control
    const speedControl = document.getElementById('speedControl');
    speedControl.addEventListener('input', updateAnimationSpeed);
}

/**
 * Demonstrates different types of scope in JavaScript
 * Shows global, function, and block scope
 */
function demonstrateScope() {
    const output = document.getElementById('scopeOutput');
    let scopeLog = [];
    
    // Global scope variable
    scopeLog.push(`Global variable: ${GLOBAL_APP_NAME}`);
    scopeLog.push(`Global counter: ${globalCounter}`);
    
    // Function scope demonstration
    function functionScopeDemo() {
        const functionScoped = "I'm only available inside this function";
        let functionCounter = 0;
        
        // This variable has function scope
        scopeLog.push(`Inside function: ${functionScoped}`);
        
        // Block scope demonstration (within function)
        if (true) {
            const blockScoped = "I'm block scoped";
            let blockCounter = 0;
            scopeLog.push(`Inside block: ${blockScoped}`);
            
            // blockScoped is not accessible outside this if block
        }
        
        // This would cause an error - blockScoped is not defined here
        // scopeLog.push(`Outside block: ${blockScoped}`);
        
        return functionCounter;
    }
    
    // Call the function to demonstrate scope
    functionScopeDemo();
    
    // Demonstrate closure
    const counter = createCounter();
    scopeLog.push(`Closure counter: ${counter()}`);
    scopeLog.push(`Closure counter: ${counter()}`);
    
    // Update the output
    output.innerHTML = scopeLog.join('<br>');
    output.style.background = '#2ecc71';
    output.style.color = 'white';
    
    console.log('Scope demonstration completed');
}

/**
 * Creates a counter using closure (function with persistent state)
 * @returns {function} A function that increments and returns counter
 */
function createCounter() {
    let count = 0; // This variable is "closed over"
    
    return function() {
        count++;
        return count;
    };
}

/**
 * Mathematical operations demonstrating parameters and return values
 * @param {string} operation - The operation to perform ('add', 'multiply', 'power')
 */
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const output = document.getElementById('mathOutput');
    
    let result;
    let operationSymbol;
    
    // Using switch statement for different operations
    switch(operation) {
        case 'add':
            result = addNumbers(num1, num2);
            operationSymbol = '+';
            break;
        case 'multiply':
            result = multiplyNumbers(num1, num2);
            operationSymbol = '×';
            break;
        case 'power':
            result = powerOfNumber(num1, num2);
            operationSymbol = '^';
            break;
        default:
            result = 'Invalid operation';
            operationSymbol = '?';
    }
    
    // Display the result
    output.innerHTML = `
        <strong>Calculation:</strong> ${num1} ${operationSymbol} ${num2} = ${result}<br>
        <small>Function used: ${operation}(${num1}, ${num2})</small>
    `;
    output.style.background = '#3498db';
    output.style.color = 'white';
}

/**
 * Adds two numbers and returns the result
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function addNumbers(a, b) {
    return a + b;
}

/**
 * Multiplies two numbers and returns the result
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
function multiplyNumbers(a, b) {
    return a * b;
}

/**
 * Raises a number to a power and returns the result
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} base raised to the power of exponent
 */
function powerOfNumber(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Transforms text based on the specified operation
 * @param {string} operation - The transformation to apply
 */
function transformText(operation) {
    const input = document.getElementById('textInput').value;
    const output = document.getElementById('textOutput');
    
    let result;
    let operationName;
    
    switch(operation) {
        case 'reverse':
            result = reverseString(input);
            operationName = 'Reverse';
            break;
        case 'uppercase':
            result = convertToUppercase(input);
            operationName = 'Uppercase';
            break;
        case 'words':
            result = countWords(input);
            operationName = 'Word Count';
            break;
        default:
            result = 'Invalid operation';
            operationName = 'Error';
    }
    
    output.innerHTML = `
        <strong>${operationName}:</strong> ${result}<br>
        <small>Original: "${input}"</small>
    `;
    output.style.background = '#9b59b6';
    output.style.color = 'white';
}

/**
 * Reverses a string
 * @param {string} str - The string to reverse
 * @returns {string} The reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Converts a string to uppercase
 * @param {string} str - The string to convert
 * @returns {string} The uppercase string
 */
function convertToUppercase(str) {
    return str.toUpperCase();
}

/**
 * Counts the number of words in a string
 * @param {string} str - The string to analyze
 * @returns {string} The word count description
 */
function countWords(str) {
    const words = str.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = str.length;
    
    return `${wordCount} words, ${charCount} characters`;
}

/**
 * Processes an array of numbers based on the specified operation
 * @param {string} operation - The operation to perform
 */
function processArray(operation) {
    const input = document.getElementById('arrayInput').value;
    const output = document.getElementById('arrayOutput');
    
    // Convert input string to array of numbers
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    if (numbers.length === 0) {
        output.innerHTML = 'Please enter valid numbers separated by commas';
        output.style.background = '#e74c3c';
        return;
    }
    
    let result;
    let operationName;
    
    switch(operation) {
        case 'sum':
            result = calculateSum(numbers);
            operationName = 'Sum';
            break;
        case 'average':
            result = calculateAverage(numbers);
            operationName = 'Average';
            break;
        case 'max':
            result = findMax(numbers);
            operationName = 'Maximum';
            break;
        default:
            result = 'Invalid operation';
            operationName = 'Error';
    }
    
    output.innerHTML = `
        <strong>${operationName}:</strong> ${result}<br>
        <small>Array: [${numbers.join(', ')}]</small>
    `;
    output.style.background = '#f39c12';
    output.style.color = 'white';
}

/**
 * Calculates the sum of numbers in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The sum of all numbers
 */
function calculateSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Calculates the average of numbers in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The average of the numbers
 */
function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return (sum / numbers.length).toFixed(2);
}

/**
 * Finds the maximum value in an array
 * @param {number[]} numbers - Array of numbers
 * @returns {number} The maximum value
 */
function findMax(numbers) {
    return Math.max(...numbers);
}

// ============================================================================
// PART 3: Combining CSS Animations with JavaScript
// ============================================================================

/**
 * PART 3: Integration of CSS animations with JavaScript triggers
 */
function initializePart3Integration() {
    console.log('🎨🎬 Initializing Part 3: CSS + JavaScript Integration...');
    
    // Add click event to flip card
    const flipCard = document.getElementById('flipCard');
    flipCard.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
}

/**
 * Starts the controlled animation based on user selection
 */
function startAnimation() {
    const box = document.getElementById('controlledBox');
    const animationType = document.getElementById('animationType').value;
    const speed = document.getElementById('speedControl').value;
    
    // Remove any existing animation classes
    box.classList.remove('bounce', 'slide', 'rotate', 'pulse', 'animated');
    
    // Add the selected animation class
    box.classList.add(animationType, 'animated');
    
    // Update animation duration based on speed
    const duration = (11 - speed) * 0.2; // Faster with higher speed values
    box.style.animationDuration = `${duration}s`;
    
    console.log(`Animation started: ${animationType} at speed ${speed}`);
}

/**
 * Stops the current animation
 */
function stopAnimation() {
    const box = document.getElementById('controlledBox');
    box.classList.remove('animated');
    console.log('Animation stopped');
}

/**
 * Resets the animation box to its initial state
 */
function resetAnimation() {
    const box = document.getElementById('controlledBox');
    box.classList.remove('bounce', 'slide', 'rotate', 'pulse', 'animated');
    box.style.animationDuration = '';
    box.style.transform = '';
    console.log('Animation reset');
}

/**
 * Updates animation speed in real-time
 */
function updateAnimationSpeed() {
    const speed = document.getElementById('speedControl').value;
    const box = document.getElementById('controlledBox');
    
    if (box.classList.contains('animated')) {
        const duration = (11 - speed) * 0.2;
        box.style.animationDuration = `${duration}s`;
    }
}

/**
 * Flips the card (alternative to click event)
 */
function flipCard() {
    const card = document.getElementById('flipCard');
    card.classList.toggle('flipped');
}

/**
 * Opens the modal with animation
 */
function openModal() {
    const modal = document.getElementById('demoModal');
    modal.style.display = 'block';
    modal.classList.remove('modal-closing');
    console.log('Modal opened');
}

/**
 * Closes the modal with animation
 */
function closeModal() {
    const modal = document.getElementById('demoModal');
    modal.classList.add('modal-closing');
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('modal-closing');
    }, 300); // Match the animation duration
    
    console.log('Modal closed');
}

/**
 * Starts the progress loader animation
 */
function startLoader() {
    const progressBar = document.getElementById('progressBar');
    progressBar.classList.add('animating');
    console.log('Loader started');
}

/**
 * Resets the progress loader
 */
function resetLoader() {
    const progressBar = document.getElementById('progressBar');
    progressBar.classList.remove('animating');
    progressBar.style.width = '0%';
    console.log('Loader reset');
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Generates a random color from the global colors array
 * @returns {string} A random color hex code
 */
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * globalColors.length);
    return globalColors[randomIndex];
}

/**
 * Debounce function to limit
