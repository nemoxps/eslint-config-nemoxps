module.exports = {
    rules: {
        'array-bracket-spacing': [2, 'never', {
            singleValue: false,
            objectsInArrays: false,
            arraysInArrays: false,
        }],
        
        'block-spacing': [2, 'always'],
        
        'brace-style': [2, 'allman', {
            allowSingleLine: true,
        }],
        
        camelcase: [2, {
            properties: 'always',
        }],
        
        'comma-dangle': [2, {
            arrays: 'only-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        
        'comma-spacing': [2, {
            before: false,
            after: true,
        }],
        
        'comma-style': [2, 'last'],
        
        'computed-property-spacing': [2, 'never'],
        
        'consistent-this': [2, 'that'],
        
        'eol-last': [2, 'never'],
        
        'func-call-spacing': [2, 'never'],
        
        'func-style': [2, 'expression', {
            allowArrowFunctions: true,
        }],
        
        indent: [2, 2, {
            SwitchCase: 1,
            VariableDeclarator: {
                var: 2,
                let: 2,
                const: 3,
            },
            outerIIFEBody: 2,
            MemberExpression: 1,
            FunctionDeclaration: {
                parameters: 2,
                body: 2,
            },
            FunctionExpression: {
                parameters: 2,
                body: 2,
            },
            CallExpression: {
                arguments: 2,
            },
            ArrayExpression: 2,
            ObjectExpression: 2,
        }],
        
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }],
        
        'keyword-spacing': [2, {
            before: true,
            after: true,
        }],
        
        'linebreak-style': [2, 'unix'],
        
        'lines-around-directive': [2, {
            before: 'always',
            after: 'always',
        }],
        
        'new-parens': 2,
        
        'newline-per-chained-call': [2, {
            ignoreChainWithDepth: 4,
        }],
        
        'no-array-constructor': 2,
        
        'no-lonely-if': 2,
        
        'no-mixed-spaces-and-tabs': 2,
        
        'no-multiple-empty-lines': [2, {
            max: 2,
            maxBOF: 0,
            maxEOF: 0,
        }],
        
        'no-new-object': 2,
        
        'no-tabs': 2,
        
        'no-trailing-spaces': [2, {
            skipBlankLines: true,
        }],
        
        'no-unneeded-ternary': [2, {
            defaultAssignment: false,
        }],
        
        'no-whitespace-before-property': 2,
        
        'nonblock-statement-body-position': [2, 'below', {
            overrides: {
                if: 'any',
            },
        }],
        
        'object-curly-newline': [2, {
            multiline: true,
        }],
        
        'object-curly-spacing': [2, 'always'],
        
        'object-property-newline': [2, {
            allowMultiplePropertiesPerLine: true,
        }],
        
        'operator-assignment': [2, 'always'],
        
        'padded-blocks': [2, {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
        }],
        
        'quote-props': [2, 'as-needed', {
            keywords: false,
            unnecessary: true,
            numbers: false,
        }],
        
        quotes: [2, 'single', {
            avoidEscape: false,
            allowTemplateLiterals: false,
        }],
        
        'semi-spacing': [2, {
            before: false,
            after: true,
        }],
        
        semi: [2, 'always', {
            omitLastInOneLineBlock: false,
        }],
        
        'space-before-blocks': [2, 'always'],
        
        'space-before-function-paren': [2, {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        
        'space-in-parens': [2, 'never'],
        
        'space-infix-ops': 2,
        
        'space-unary-ops': [2, {
            words: true,
            nonwords: false,
        }],
        
        'spaced-comment': [2, 'always', {
            block: {
                markers: ['!'],
                balanced: true,
            },
        }],
        
        'template-tag-spacing': [2, 'never'],
        
        'unicode-bom': [2, 'never'],
    },
};