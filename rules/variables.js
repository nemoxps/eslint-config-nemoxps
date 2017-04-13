module.exports = {
    rules: {
        'no-delete-var': 2,
        
        'no-label-var': 2,
        
        'no-shadow-restricted-names': 2,
        
        'no-undef-init': 2,
        
        'no-undef': [2, {
            typeof: true,
        }],
        
        'no-unused-vars': [2, {
            vars: 'local',
            args: 'after-used',
            ignoreRestSiblings: true,
            caughtErrors: 'none',
        }],
        
        'no-use-before-define': [2, {
            functions: true,
            classes: true,
            variables: true,
        }],
    },
};