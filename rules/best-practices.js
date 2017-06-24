module.exports = {
    rules: {
        'block-scoped-var': 2,
        
        curly: [2, 'multi'],
        
        'dot-location': [2, 'property'],
        
        'dot-notation': [2, {
            allowKeywords: true,
        }],
        
        eqeqeq: [2, 'always', {
            null: 'always',
        }],
        
        'no-alert': 2,
        
        'no-caller': 2,
        
        'no-case-declarations': 2,
        
        'no-else-return': 2,
        
        'no-empty-function': [2, {
            allow: ['functions', 'arrowFunctions', 'methods'],
        }],
        
        'no-empty-pattern': 2,
        
        'no-eval': [2, {
            allowIndirect: false,
        }],
        
        'no-extend-native': 2,
        
        'no-extra-bind': 2,
        
        'no-extra-label': 2,
        
        'no-fallthrough': 2,
        
        'no-floating-decimal': 2,
        
        'no-global-assign': 2,
        
        'no-implicit-coercion': [2, {
            boolean: true,
            number: true,
            string: true,
            allow: ['!!'],
        }],
        
        'no-implicit-globals': 2,
        
        'no-implied-eval': 2,
        
        'no-iterator': 2,
        
        'no-labels': [2, {
            allowLoop: true,
            allowSwitch: true,
        }],
        
        'no-lone-blocks': 2,
        
        'no-loop-func': 2,
        
        'no-multi-spaces': [2, {
            exceptions: {
                AssignmentExpression: true,
                VariableDeclarator: true,
            },
        }],
        
        'no-multi-str': 2,
        
        'no-new': 2,
        
        'no-new-func': 2,
        
        'no-new-wrappers': 2,
        
        'no-octal': 2,
        
        'no-octal-escape': 2,
        
        'no-proto': 2,
        
        'no-redeclare': [2, {
            builtinGlobals: true,
        }],
        
        'no-restricted-properties': [2, {
            property: '__defineGetter__',
            message: 'Use Object.defineProperty instead.',
        }, {
            property: '__defineSetter__',
            message: 'Use Object.defineProperty instead.',
        }, {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.',
        }],
        
        'no-return-assign': [2, 'except-parens'],
        
        'no-return-await': 2,
        
        'no-script-url': 2,
        
        'no-self-assign': [2, {
            props: true,
        }],
        
        'no-self-compare': 2,
        
        'no-sequences': 2,
        
        'no-throw-literal': 2,
        
        'no-unused-expressions': [2, {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: false,
        }],
        
        'no-unused-labels': 2,
        
        'no-useless-call': 2,
        
        'no-useless-concat': 2,
        
        'no-useless-escape': 2,
        
        'no-useless-return': 2,
        
        'no-void': 2,
        
        'no-with': 2,
        
        'prefer-promise-reject-errors': [2, {
            allowEmptyReject: true,
        }],
        
        radix: [2, 'always'],
        
        'wrap-iife': [2, 'inside', {
            functionPrototypeMethods: false,
        }],
        
        yoda: [2, 'never'],
    },
};