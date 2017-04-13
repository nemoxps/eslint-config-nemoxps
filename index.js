module.exports = {
    plugins: ['nemoxps'],
    extends: [
        './rules/possible-errors',
        './rules/best-practices',
        './rules/variables',
        './rules/nodejs',
        './rules/style',
        './rules/es6',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
    },
    rules: {
        // Use my personal JS-Allman-style flavor:
        //   allman with all kinds of statements,
        //   1tbs with first-class-citizens like functions and classes.
        'brace-style': 0,
        'nemoxps/brace-style': [2, 'allman', {
            allowSingleLine: true,
            controlStatementsOnly: true,
        }],
        
        // TODO: Enable when `indent-rewrite` gets merged.
        //       &&     when ClassDeclaration/ClassExpression options are implemented.
        indent: 0,
        'nemoxps/indent': [2, 2, {
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
            ClassDeclaration: 2,
            ClassExpression: 2,
            ArrayExpression: 2,
            ObjectExpression: 2,
            flatTernaryExpressions: false,
        }],
        
        // TODO: Enable when padding in implicit blocks can be prohibited.
        'padded-blocks': 0,
        'nemoxps/padded-blocks': [2, {
            blocks: 'never',
            classes: 'never',
            switches: 'never',
            'implicit-blocks': 'never',
        }],
        
        // TODO: Enable when the following syntax is allowed but not required.
        // let foo = {
        //     bar: true
        // };
        'object-curly-newline': 0,
    },
};