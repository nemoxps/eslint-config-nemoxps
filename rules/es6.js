module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {
        'arrow-parens': [2, 'always'],
        
        'arrow-spacing': [2, {
            before: true,
            after: true,
        }],
        
        'constructor-super': 2,
        
        'generator-star-spacing': [2, {
            before: false,
            after: true,
        }],
        
        'no-class-assign': 2,
        
        'no-const-assign': 2,
        
        'no-dupe-class-members': 2,
        
        'no-duplicate-imports': [2, {
            includeExports: true,
        }],
        
        'no-new-symbol': 2,
        
        'no-this-before-super': 2,
        
        'no-useless-computed-key': 2,
        
        'no-useless-constructor': 2,
        
        'no-useless-rename': [2, {
            ignoreImport: false,
            ignoreExport: false,
            ignoreDestructuring: false,
        }],
        
        'no-var': 2,
        
        'object-shorthand': [2, 'always', {
            avoidQuotes: false,
            ignoreConstructors: false,
        }],
        
        'prefer-arrow-callback': [2, {
            allowNamedFunctions: true,
            allowUnboundThis: true,
        }],
        
        'prefer-rest-params': 2,
        
        'prefer-spread': 2,
        
        'rest-spread-spacing': [2, 'never'],
        
        'symbol-description': 2,
        
        'template-curly-spacing': [2, 'never'],
        
        'yield-star-spacing': [2, {
            before: false,
            after: true,
        }],
    },
};