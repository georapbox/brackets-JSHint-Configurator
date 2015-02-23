/*global define */

// English - root strings
define({
    'COMMAND_NAME': 'JSHint Configurator',

    /* DIALOG HEADER */
    'DIALOG_TITLE': 'JSHint Configurator',
    'CLEAR_OPTIONS': 'clear options',

    /* DIALOG BODY */
    'ENFORCING_OPTIONS': 'Enforcing options',
    'ENFORCING_OPTIONS_DESC': 'When set to true, these options will make JSHint produce more warnings about your code.',
    'RELAXING_OPTIONS': 'Relaxing options',
    'RELAXING_OPTIONS_DESC': 'When set to true, these options will make JSHint produce less warnings about your code.',
    'ENVIRONMENTS': 'Environments',
    'ENVIRONMENTS_DESC': 'These options let JSHint know about some pre-defined global variables.',

    /* JSHINT OPTIONS */
    'ENFORCEALL': 'enforceall',
    'BITWISE': 'bitwise',
    'CAMELCASE': 'camelcase',
    'CURLY': 'curly',
    'EQEQEQ': 'eqeqeq',
    'ES3': 'es3',
    'ES5': 'es5',
    'GLOBALS': 'globals',
    'FORIN': 'forin',
    'FREEZE': 'freeze',
    'IMMED': 'immed',
    'INDENT': 'indent',
    'LATEDEF': 'latedef',
    'NOCOMMA': 'nocomma',
    'NEWCAP': 'newcap',
    'NOARG': 'noarg',
    'NOEMPTY': 'noempty',
    'NONBSP': 'nonbsp',
    'NONEW': 'nonew',
    'SINGLEGROUPS': 'singleGroups',
    'PLUSPLUS': 'plusplus',
    'QUOTMARK': 'quotmark',
    'UNDEF': 'undef',
    'UNUSED': 'unused',
    'STRICT': 'strict',
    'MAXPARAMS': 'maxparams',
    'MAXDEPTH': 'maxdepth',
    'MAXSTATEMENTS': 'maxstatements',
    'MAXCOMPLEXITY': 'maxcomplexity',
    'MAXLEN': 'maxlen',
    'ASI': 'asi',
    'BOSS': 'boss',
    'DEBUG': 'debug',
    'ELISION': 'elision',
    'EQNULL': 'eqnull',
    'ESNEXT': 'esnext',
    'EVIL': 'evil',
    'EXPR': 'expr',
    'FUNSCOPE': 'funscope',
    'GLOBALSTRICT': 'globalstrict',
    'ITERATOR': 'iterator',
    'WITHSTMT': 'withstmt',
    'LASTSEMIC': 'lastsemic',
    'LAXBREAK': 'laxbreak',
    'LAXCOMMA': 'laxcomma',
    'LOOPFUNC': 'loopfunc',
    'MAXERR': 'maxerr',
    'MOZ': 'moz',
    'MULTISTR': 'multistr',
    'NOTYPEOF': 'notypeof',
    'PROTO': 'proto',
    'SCRIPTURL': 'scripturl',
    'SHADOW': 'shadow',
    'SUB': 'sub',
    'SUPERNEW': 'supernew',
    'VALIDTHIS': 'validthis',
    'NOYIELD': 'noyield',
    'BROWSER': 'browser',
    'COUCH': 'couch',
    'DEVEL': 'devel',
    'DOJO': 'dojo',
    'JQUERY': 'jquery',
    'MOOTOOLS': 'mootools',
    'NODE': 'node',
    'NONSTANDARD': 'nonstandard',
    'PHANTOM': 'phantom',
    'PROTOTYPEJS': 'prototypejs',
    'RHINO': 'rhino',
    'WORKER': 'worker',
    'WSH': 'wsh',
    'YUI': 'yui',
    'BROWSERIFY': 'browserify',
    'JASMINE': 'jasmine',
    'MOCHA': 'mocha',
    'QUNIT': 'qunit',
    'SHELLJS': 'shelljs',
    'TYPED': 'typed',

    'ENFORCEALL_DESC': 'This option is a short hand for the most strict JSHint configuration. It enables all enforcing options and disables all relaxing options.',
    'BITWISE_DESC': 'This option prohibits the use of bitwise operators such as ^ (XOR), | (OR) and others. Bitwise operators are very rare in JavaScript programs and quite often & is simply a mistyped &&.',
    'CAMELCASE_DESC': 'This option allows you to force all variable names to use either camelCase style or UPPER_CASE with underscores.',
    'CURLY_DESC': 'This option requires you to always put curly braces around blocks in loops and conditionals. JavaScript allows you to omit curly braces when the block consists of only one statement.',
    'EQEQEQ_DESC': 'This options prohibits the use of == and != in favor of === and !==. The former try to coerce values before comparing them which can lead to some unexpected results. The latter don\'t do any coercion so they are generally safer.',
    'ES3_DESC': 'This option tells JSHint that your code needs to adhere to ECMAScript 3 specification. Use this option if you need your program to be executable in older browsers—such as Internet Explorer 6/7/8/9—and other legacy JavaScript environments.',
    'ES5_DESC': 'This option enables syntax first defined in the ECMAScript 5.1 specification. This includes allowing reserved keywords as object properties.',
    'GLOBALS_DESC': 'This option can be used to specify a white list of global variables that are not formally defined in the source code. This is most useful when combined with the undef option in order to suppress warnings for project-specific global variables. Setting an entry to true enables reading and writing to that variable. Setting it to false will trigger JSHint to consider that variable read-only. See also the "environment" options: a set of options to be used as short hand for enabling global variables defined in common JavaScript environments.',
    'FORIN_DESC': 'This option requires all for in loops to filter object\'s items. The for in statement allows for looping through the names of all of the properties of an object including those inherited throught the prototype chain. This behavior can lead to unexpected items in your object so it is generally safer to always filter inherited properties out.',
    'FREEZE_DESC': 'This options prohibits overwriting prototypes of native objects such as Array, Date and so on.',
    'IMMED_DESC': 'This option prohibits the use of immediate function invocations without wrapping them in parentheses. Wrapping parentheses assists readers of your code in understanding that the expression is the result of a function, and not the function itself.',
    'INDENT_DESC': 'This option sets a specific tab width for your code.',
    'LATEDEF_DESC': 'This option prohibits the use of a variable before it was defined. JavaScript has function scope only and, in addition to that, all variables are always moved—or hoisted— to the top of the function. This behavior can lead to some very nasty bugs and that\'s why it is safer to always use variable only after they have been explicitly defined. Setting this option to "nofunc" will allow function declarations to be ignored.',
    'NOCOMMA_DESC': 'This option prohibits the use of the comma operator. When misused, the comma operator can obscure the value of a statement and promote incorrect code.',
    'NEWCAP_DESC': 'This option requires you to capitalize names of constructor functions. Capitalizing functions that are intended to be used with new operator is just a convention that helps programmers to visually distinguish constructor functions from other types of functions to help spot mistakes when using this. Not doing so won\'t break your code in any browsers or environments but it will be a bit harder to figure out—by reading the code—if the function was supposed to be used with or without new. And this is important because when the function that was intended to be used with new is used without it, this will point to the global object instead of a new object.',
    'NOARG_DESC': 'This option prohibits the use of arguments.caller and arguments.callee. Both .caller and .callee make quite a few optimizations impossible so they were deprecated in future versions of JavaScript. In fact, ECMAScript 5 forbids the use of arguments.callee in strict mode.',
    'NOEMPTY_DESC': 'This option warns when you have an empty block in your code. JSLint was originally warning for all empty blocks and we simply made it optional. There were no studies reporting that empty blocks in JavaScript break your code in any way.',
    'NONBSP_DESC': 'This option warns about "non-breaking whitespace" characters. These characters can be entered with option-space on Mac computers and have a potential of breaking non-UTF8 web pages.',
    'NONEW_DESC': 'This option prohibits the use of constructor functions for side-effects. Some people like to call constructor functions without assigning its result to any variable. There is no advantage in this approach over simply calling MyConstructor since the object that the operator new creates isn\'t used anywhere so you should generally avoid constructors like this one.',
    'SINGLEGROUPS_DESC': 'This option prohibits the use of the grouping operator when it is not strictly required. Such usage commonly reflects a misunderstanding of unary operators.',
    'PLUSPLUS_DESC': 'This option prohibits the use of unary increment and decrement operators. Some people think that ++ and -- reduces the quality of their coding styles and there are programming languages—such as Python—that go completely without these operators.',
    'QUOTMARK_DESC': 'This option enforces the consistency of quotation marks used throughout your code. It accepts three values: true if you don\'t want to enforce one particular style but want some consistency, "single" if you want to allow only single quotes and "double" if you want to allow only double quotes.',
    'UNDEF_DESC': 'This option prohibits the use of explicitly undeclared variables. This option is very useful for spotting leaking and mistyped variables. If your variable is defined in another file, you can use /*global ... */ directive to tell JSHint about it.',
    'UNUSED_DESC': 'This option warns when you define and never use your variables. It is very useful for general code cleanup, especially when used in addition to undef. In addition to that, this option will warn you about unused global variables declared via /*global ... */ directive. This can be set to vars to only check for variables, not function parameters, or strict to check all variables and parameters. The default (true) behavior is to allow unused parameters that are followed by a used parameter.',
    'STRICT_DESC': 'This option requires all functions to run in ECMAScript 5\'s strict mode. Strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode eliminates some JavaScript pitfalls that didn\'t cause errors by changing them to produce errors. It also fixes mistakes that made it difficult for the JavaScript engines to perform certain optimizations. Note: This option enables strict mode for function scope only. It prohibits the global scoped strict mode because it might break third-party widgets on your page. If you really want to use global strict mode, see the globalstrict option.',
    'MAXPARAMS_DESC': 'This option lets you set the max number of formal parameters allowed per function.',
    'MAXDEPTH_DESC': 'This option lets you control how nested do you want your blocks to be.',
    'MAXSTATEMENTS_DESC': 'This option lets you set the max number of statements allowed per function.',
    'MAXCOMPLEXITY_DESC': 'This option lets you control cyclomatic complexity throughout your code. Cyclomatic complexity measures the number of linearly independent paths through a program\'s source code.',
    'MAXLEN_DESC': 'This option lets you set the maximum length of a line.',
    'ASI_DESC': 'This option suppresses warnings about missing semicolons. There is a lot of FUD about semicolon spread by quite a few people in the community. The common myths are that semicolons are required all the time (they are not) and that they are unreliable. JavaScript has rules about semicolons which are followed by all browsers so it is up to you to decide whether you should or should not use semicolons in your code.',
    'BOSS_DESC': 'This option suppresses warnings about the use of assignments in cases where comparisons are expected. More often than not, code like if (a = 10) {} is a typo.',
    'DEBUG_DESC': 'This option suppresses warnings about the debugger statements in your code.',
    'ELISION_DESC': 'This option tells JSHint that your code uses ES3 array elision elements, or empty elements (for example, [1, , , 4, , , 7]).',
    'EQNULL_DESC': 'This option suppresses warnings about == null comparisons. Such comparisons are often useful when you want to check if a variable is null or undefined.',
    'ESNEXT_DESC': 'This option tells JSHint that your code uses ECMAScript 6 specific syntax. Note that these features are not finalized yet and not all browsers implement them.',
    'EVIL_DESC': 'This option suppresses warnings about the use of eval. The use of eval is discouraged because it can make your code vulnerable to various injection attacks and it makes it hard for JavaScript interpreter to do certain optimizations.',
    'EXPR_DESC': 'This option suppresses warnings about the use of expressions where normally you would expect to see assignments or function calls. Most of the time, such code is a typo. However, it is not forbidden by the spec and that\'s why this warning is optional.',
    'FUNSCOPE_DESC': 'This option suppresses warnings about declaring variables inside of control structures while accessing them later from the outside. Even though JavaScript has only two real scopes—global and function—such practice leads to confusion among people new to the language and hard-to-debug bugs. This is why, by default, JSHint warns about variables that are used outside of their intended scope.',
    'GLOBALSTRICT_DESC': 'This option suppresses warnings about the use of global strict mode. Global strict mode can break third-party widgets so it is not recommended. For more info about strict mode see the strict option.',
    'ITERATOR_DESC': 'This option suppresses warnings about the __iterator__ property. This property is not supported by all browsers so use it carefully.',
    'WITHSTMT_DESC': 'This option suppresses warnings about the use of the with statement. The semantics of the with statement can cause confusion among developers and accidental definition of global variables.',
    'LASTSEMIC_DESC': 'This option suppresses warnings about missing semicolons, but only when the semicolon is omitted for the last statement in a one-line block. This is a very niche use case that is useful only when you use automatic JavaScript code generators.',
    'LAXBREAK_DESC': 'This option suppresses most of the warnings about possibly unsafe line breakings in your code. It doesn\'t suppress warnings about comma-first coding style. To suppress those you have to use laxcomma (see below).',
    'LAXCOMMA_DESC': 'This option suppresses warnings about comma-first coding style.',
    'LOOPFUNC_DESC': 'This option suppresses warnings about functions inside of loops. Defining functions inside of loops can lead to bugs.',
    'MAXERR_DESC': 'This options allows you to set the maximum amount of warnings JSHint will produce before giving up. Default is 50.',
    'MOZ_DESC': 'This options tells JSHint that your code uses Mozilla JavaScript extensions. Unless you develop specifically for the Firefox web browser you don\'t need this option.',
    'MULTISTR_DESC': 'This option suppresses warnings about multi-line strings. Multi-line strings can be dangerous in JavaScript because all hell breaks loose if you accidentally put a whitespace in between the escape character (\\) and a new line. Note that even though this option allows correct multi-line strings, it still warns about multi-line strings without escape characters or with anything in between the escape character and a whitespace.',
    'NOTYPEOF_DESC': 'This option suppresses warnings about invalid typeof operator values. This operator has only a limited set of possible return values. By default, JSHint warns when you compare its result with an invalid value which often can be a typo.',
    'PROTO_DESC': 'This option suppresses warnings about the __proto__ property.',
    'SCRIPTURL_DESC': 'This option suppresses warnings about the use of script-targeted URLs—such as javascript:...',
    'SHADOW_DESC': 'This option suppresses warnings about variable shadowing i.e. declaring a variable that had been already declared somewhere in the outer scope.',
    'SUB_DESC': 'This option suppresses warnings about using [] notation when it can be expressed in dot notation: person[\'name\'] vs. person.name.',
    'SUPERNEW_DESC': 'This option suppresses warnings about "weird" constructions like new function () { ... } and new Object;. Such constructions are sometimes used to produce singletons in JavaScript.',
    'VALIDTHIS_DESC': 'This option suppresses warnings about possible strict violations when the code is running in strict mode and you use this in a non-constructor function. You should use this option—in a function scope only—when you are positive that your use of this is valid in the strict mode (for example, if you call your function using Function.call). Note: This option can be used only inside of a function scope. JSHint will fail with an error if you will try to set this option globally.',
    'NOYIELD_DESC': 'This option suppresses warnings about generator functions with no yield statement in them.',
    'BROWSER_DESC': 'This option defines globals exposed by modern browsers: all the way from good old document and navigator to the HTML5 FileReader and other new developments in the browser world. Note: This option doesn\'t expose variables like alert or console. See option devel for more information.',
    'COUCH_DESC': 'This option defines globals exposed by CouchDB. CouchDB is a document-oriented database that can be queried and indexed in a MapReduce fashion using JavaScript.',
    'DEVEL_DESC': 'This option defines globals that are usually used for logging poor-man\'s debugging: console, alert, etc. It is usually a good idea to not ship them in production because, for example, console.log breaks in legacy versions of Internet Explorer.',
    'DOJO_DESC': 'This option defines globals exposed by the Dojo Toolkit.',
    'JQUERY_DESC': 'This option defines globals exposed by the jQuery JavaScript library.',
    'MOOTOOLS_DESC': 'This option defines globals exposed by the MooTools JavaScript framework.',
    'NODE_DESC': 'This option defines globals available when your code is running inside of the Node runtime environment. Node.js is a server-side JavaScript environment that uses an asynchronous event-driven model. This option also skips some warnings that make sense in the browser environments but don\'t make sense in Node such as file-level use strict pragmas and console.log statements.',
    'NONSTANDARD_DESC': 'This option defines non-standard but widely adopted globals such as escape and unescape.',
    'PHANTOM_DESC': 'This option defines globals available when your core is running inside of the PhantomJS runtime environment. PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG.',
    'PROTOTYPEJS_DESC': 'This option defines globals exposed by the Prototype JavaScript framework.',
    'RHINO_DESC': 'This option defines globals available when your code is running inside of the Rhino runtime environment. Rhino is an open-source implementation of JavaScript written entirely in Java.',
    'WORKER_DESC': 'This option defines globals available when your code is running inside of a Web Worker. Web Workers provide a simple means for web content to run scripts in background threads.',
    'WSH_DESC': 'This option defines globals available when your code is running as a script for the Windows Script Host.',
    'YUI_DESC': 'This option defines globals exposed by the YUI JavaScript framework.',
    'BROWSERIFY_DESC': 'This option defines globals available when using the Browserify tool to build a project.',
    'JASMINE_DESC': 'This option defines globals exposed by the Jasmine unit testing framework.',
    'MOCHA_DESC': 'This option defines globals exposed by the "BDD" and "TDD" UIs of the Mocha unit testing framework.',
    'QUNIT_DESC': 'This option defines globals exposed by the QUnit unit testing framework.',
    'SHELLJS_DESC': 'This option defines globals exposed by the ShellJS library.',
    'TYPED_DESC': 'This option defines globals for typed array constructors.',

    /* DIRECTIVE AREA */
    'DIRECTIVE_TITLE': 'JSHint Directive',
    'HINT': '<span style="font-weight:bold;">Hint:</span> Always insert the JSHint directive in the first line of the document.',
    'SELECT': 'Select',
    'EXTRACT': 'Extract to file',
    'JSON_CONVERT': 'Convert to JSON',

    /* DIALOG FOOTER */
    'JSHINT_INFO': 'JSHint options documentation',
    'DIALOG_OK': 'Insert directive to document',
    'DIALOG_CANCEL': 'Cancel'
});