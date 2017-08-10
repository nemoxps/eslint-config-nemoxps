module.exports = {
    rules: {
        'for-direction': 2,
        
        'getter-return': [2, { allowImplicit: true }],
        
        'no-compare-neg-zero': 2,
        
        'no-cond-assign': [2, 'except-parens'],
        
        'no-constant-condition': [2, {
            checkLoops: false,
        }],
        
        'no-debugger': 2,
        
        'no-dupe-args': 2,
        
        'no-dupe-keys': 2,
        
        'no-duplicate-case': 2,
        
        'no-empty': [2, {
            allowEmptyCatch: true,
        }],
        
        'no-empty-character-class': 2,
        
        'no-ex-assign': 2,
        
        'no-extra-boolean-cast': 2,
        
        'no-extra-semi': 2,
        
        'no-func-assign': 2,
        
        'no-inner-declarations': [2, 'functions'],
        
        'no-invalid-regexp': 2,
        
        'no-irregular-whitespace': [2, {
            skipStrings: false,
            skipComments: false,
            skipRegExps: false,
            skipTemplates: false,
        }],
        
        'no-obj-calls': 2,
        
        'no-prototype-builtins': 2,
        
        'no-regex-spaces': 2,
        
        'no-sparse-arrays': 2,
        
        'no-unexpected-multiline': 2,
        
        'no-unreachable': 2,
        
        'no-unsafe-finally': 2,
        
        'no-unsafe-negation': 2,
        
        'use-isnan': 2,
        
        'valid-jsdoc': [2, {
            prefer: {
                desc: 'description',
                arg: 'param',
                argument: 'param',
                return: 'returns',
                exception: 'throws',
                constructor: 'class',
                virtual: 'abstract',
                augments: 'extends',
                prop: 'property',
                constant: 'const',
                defaultValue: 'default',
            },
            preferType: {
                String: 'string',
                Number: 'number',
                Boolean: 'boolean',
                array: 'Array',
                object: 'Object',
                Function: 'function',
                Undefined: 'undefined',
                Null: 'null',
                symbol: 'Symbol',
            },
            requireReturn: false,
            requireReturnType: true,
            matchDescription: '.*',
            requireParamDescription: false,
            requireReturnDescription: false,
        }],
        
        'valid-typeof': [2, {
            requireStringLiterals: true,
        }],
    },
};