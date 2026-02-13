/**
 * Converts a string to camelCase format.
 * 
 * Transforms input strings by splitting on whitespace, underscores, or hyphens,
 * then joining words together with the first word in lowercase and subsequent
 * words capitalized.
 * 
 * @param {string} input - The string to convert to camelCase format.
 *                         Must be a non-empty string.
 * 
 * @returns {string} The converted camelCase string.
 * 
 * @throws {Error} Throws an error if input is null.
 * @throws {Error} Throws an error if input is not a string type.
 * @throws {Error} Throws an error if input is an empty or whitespace-only string.
 * 
 * @example
 * toCamelCase('first name');      // Returns: 'firstName'
 * toCamelCase('user_id');          // Returns: 'userId'
 * toCamelCase('SCREEN_NAME');      // Returns: 'screenName'
 * toCamelCase('mobile-number');    // Returns: 'mobileNumber'
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms input strings by splitting on whitespace, underscores, hyphens,
 * or camelCase word boundaries, then joining words together with dots in
 * lowercase.
 * 
 * @param {string} input - The string to convert to dot.case format.
 *                         Must be a non-empty string.
 * 
 * @returns {string} The converted dot.case string with words separated by dots.
 * 
 * @throws {Error} Throws an error if input is null.
 * @throws {Error} Throws an error if input is not a string type.
 * @throws {Error} Throws an error if input is an empty or whitespace-only string.
 * 
 * @example
 * toDotCase('first name');        // Returns: 'first.name'
 * toDotCase('user_id');            // Returns: 'user.id'
 * toDotCase('SCREEN_NAME');        // Returns: 'screen.name'
 * toDotCase('mobile-number');      // Returns: 'mobile.number'
 * toDotCase('firstName');          // Returns: 'first.name'
 */
function toCamelCase(input) {
    // Error handling for null or empty inputs
    if (input === null) {
        throw new Error(`Invalid input: received null`);
    }

    if (typeof input !== 'string') {
        throw new Error(`Invalid input: expected string, received ${typeof input}`);
    }

    if (input.trim() === '') {
        throw new Error(`Invalid input: received empty string`);
    }

    // Split by spaces, underscores, or hyphens
    const words = input.split(/[\s_-]+/);

    // Convert to camelCase
    const camelCased = words
        .map((word, index) => {
            if (index === 0) {
                // First word is lowercase
                return word.toLowerCase();
            }
            // Capitalize first letter of subsequent words
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');

    return camelCased;
}

// Test cases
try {
    console.log(toCamelCase('first name')); // firstName
    console.log(toCamelCase('user_id')); // userId
    console.log(toCamelCase('SCREEN_NAME')); // screenName
    console.log(toCamelCase('mobile-number')); // mobileNumber
    
    // Error cases
    toCamelCase(null); // throws error
    toCamelCase(''); // throws error
    toCamelCase(123); // throws error
} catch (error) {
    console.error(error.message);
}



function toDotCase(input) {
    // Error handling for null or empty inputs
    if (input === null) {
        throw new Error(`Invalid input: received null`);
    }

    if (typeof input !== 'string') {
        throw new Error(`Invalid input: expected string, received ${typeof input}`);
    }

    if (input.trim() === '') {
        throw new Error(`Invalid input: received empty string`);
    }

    // Split by spaces, underscores, hyphens, or camelCase boundaries
    const words = input.split(/[\s_-]+|(?=[A-Z])/).filter(word => word.length > 0);

    // Convert to dot.case
    const dotCased = words
        .map(word => word.toLowerCase())
        .join('.');

    return dotCased;
}

// Test cases
try {
    console.log(toDotCase('first name')); // first.name
    console.log(toDotCase('user_id')); // user.id
    console.log(toDotCase('SCREEN_NAME')); // screen.name
    console.log(toDotCase('mobile-number')); // mobile.number
    console.log(toDotCase('firstName')); // first.name
    
    // Error cases
    toDotCase(null); // throws error
    toDotCase(''); // throws error
    toDotCase(123); // throws error
} catch (error) {
    console.error(error.message);
}



function toKebabCase(input) {
    // Error handling for null or empty inputs
    if (input === null) {
        throw new Error(`Invalid input: received null`);
    }

    if (typeof input !== 'string') {
        throw new Error(`Invalid input: expected string, received ${typeof input}`);
    }

    if (input.trim() === '') {
        throw new Error(`Invalid input: received empty string`);
    }

    // Split by spaces, underscores, hyphens, or camelCase boundaries
    const words = input.split(/[\s_-]+|(?=[A-Z])/).filter(word => word.length > 0);

    // Convert to kebab-case
    const kebabCased = words
        .map(word => word.toLowerCase())
        .join('-');

    return kebabCased;
}

// Test cases
try {
    console.log(toKebabCase('first name')); // first-name
    console.log(toKebabCase('user_id')); // user-id
    console.log(toKebabCase('SCREEN_NAME')); // screen-name
    console.log(toKebabCase('mobile-number')); // mobile-number
    console.log(toKebabCase('firstName')); // first-name
    
    // Error cases
    toKebabCase(null); // throws error
    toKebabCase(''); // throws error
    toKebabCase(123); // throws error
} catch (error) {
    console.error(error.message);
}