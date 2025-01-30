/* This script extracts the list of 'pylint' rules that have already been implemented by ruff */

// Visit https://github.com/astral-sh/ruff/issues/970 then run the following code
// Select all div elements with the class "TaskListItem-module__checkbox-items--F0Yz2"
const taskItems = document.querySelectorAll('div.TaskListItem-module__checkbox-items--F0Yz2');
// Filter out the div elements that have aria-checked="true"
const checkedItems = Array.from(taskItems).filter(item => item.querySelector('input[aria-checked="true"]'));
// Extract the text from all filtered items
const extractedTexts = checkedItems.map(item => item.textContent.trim());
// Extract the string value after " / ", excluding the parenthesis and its value
const extractedValues = extractedTexts.map(text => {
    const match = text.match(/\/\s*([^()]+)/);
    const code = match ? match[1].trim() : '';
    const description = text.split(' / ')[0].trim();
    return `"${code}",  # ${description}`;
});
// Build the output string for use in .pylintrc config file
let output = 'disable = [\n';
output += extractedValues.map(value => `    ${value}`).join('\n');
output += '\n]';
// Print the output
console.log(output);



// Example of extracted texts:
//
// assigning-non-slot / E0237 (PLE0237)
// await-outside-async / E1142 (PLE1142)
// bad-configuration-section / E0014
// bad-format-character / E1300 (PLE1300)
// bad-plugin-value / E0013
// bad-str-strip-call / E1310 (PLE1310)
// bad-string-format-type / E1307 (PLE1307)
// bidirectional-unicode / E2502 (PLE2502)
// broken-collections-callable / E6005
// broken-noreturn / E6004
// continue-in-finally / E0116 (PLE0116)
// duplicate-argument-name / E0108
// duplicate-bases / E0241 (PLE0241)
// format-needs-mapping / E1303 (F502)
// function-redefined / E0102 (F811)
// init-is-generator / E0100 (PLE0100)
// invalid-all-format / E0605 (PLE0605)
// invalid-all-object / E0604 (PLE0604)
// invalid-bool-returned / E0304 (PLE0304)
// invalid-bytes-returned / E0308 (PLE0308)
// invalid-character-backspace / E2510 (PLE2510)
// invalid-character-esc / E2513 (PLE2513)
// invalid-character-nul / E2514 (PLE2514)
// invalid-character-sub / E2512 (PLE2512)
// invalid-character-zero-width-space / E2515 (PLE2515)
// invalid-hash-returned / E0309 (PLE0309)
// invalid-index-returned / E0305 (PLE0305)
// invalid-length-returned / E0303 (PLE0303)
// logging-too-few-args / E1206 (PLE1206)
// logging-too-many-args / E1205 (PLE1205)
// misplaced-bare-raise / E0704 (PLE0704)
// missing-format-string-key / E1304  (F524)
// mixed-format-string / E1302 (F506)
// modified-iterating-set / E4703 (PLE4703)
// no-self-argument / E0213 (N805)
// nonexistent-operator / E0107 (B002)
// nonlocal-and-global / E0115 (PLE0115)
// nonlocal-without-binding / E0117 (PLE0117)
// not-in-loop / E0103 (F701, F702)
// notimplemented-raised / E0711 (F901)
// potential-index-error / E0643 (PLE0643)
// relative-beyond-top-level / E0402 (TID252)
// repeated-keyword / E1132 (PLE1132)
// return-arg-in-generator / E0106
// return-in-init / E0101 (PLE0101)
// return-outside-function / E0104 (F706)
// singledispatch-method / E1519 (PLE1519)
// singledispatchmethod-function / E1520 (PLE1520)
// syntax-error / E0001 (always enabled)
// too-few-format-args / E1306 (F524)
// too-many-format-args / E1305 (F522)
// too-many-star-expressions / E0112 (F622)
// truncated-format-string / E1301 (F501)
// undefined-all-variable / E0603 (F822)
// undefined-variable / E0602 (F821)
// unexpected-special-method-signature / E0302 (PLE0302)
// used-prior-global-declaration / E0118 (PLE0118)
// yield-inside-async-function / E1700 (PLE1700)
// yield-outside-function / E0105 (F704)
// anomalous-backslash-in-string / W1401 (W605)
// assert-on-string-literal / W0129 (PLW0129)
// assert-on-tuple / W0199 (F631)
// bad-dunder-name / W3201 (PLW3201)
// bad-format-string / W1302 (F521)
// bad-open-mode / W1501 (PLW1501)
// bad-staticmethod-argument / W0211 (PLW0211)
// bare-except / W0702 (E722)
// binary-op-exception / W0711 (PLW0711)
// boolean-datetime / W1502
// broad-exception-caught / W0718 (BLE001)
// broad-exception-raised / W0719 (TRY002)
// cell-var-from-loop / W0640 (B023)
// consider-ternary-expression / W0160 (SIM108)
// dangerous-default-value / W0102 (B006)
// duplicate-except / W0705 (B014)
// duplicate-key / W0109 (F601)
// duplicate-value / W0130 (B033)
// eq-without-hash / W1641 (PLW1641)
// eval-used / W0123 (S307)
// exec-used / W0122 (S102)
// expression-not-assigned / W0106 (B018)
// f-string-without-interpolation / W1309 (F541)
// fixme / W0511 (FIX001, FIX002, FIX003, FIX004)
// forgotten-debug-statement / W1515 (T100 )
// format-combined-specification / W1305 (F525)
// format-string-without-interpolation / W1310 (F541)
// global-at-module-level / W0604 (PLW0604)
// global-statement / W0603 (PLW0603)
// global-variable-not-assigned / W0602 (PLW0602)
// implicit-str-concat / W1404 (ISC001)
// import-self / W0406 (PLW0406)
// inconsistent-quotes / W1405 (Q000)
// invalid-envvar-default / W1508 (PLW1508)
// keyword-arg-before-vararg / W1113 (B026)
// logging-format-interpolation / W1202 (G001)
// logging-fstring-interpolation / W1203 (G004)
// logging-not-lazy / W1201 (G002)
// lost-exception / W0150 (B012)
// method-cache-max-size-none / W1518 (B019)
// misplaced-future / W0410 (F404)
// missing-format-argument-key / W1303 (F524)
// named-expr-without-context / W0131 (PLW0131)
// nan-comparison / W0177 (PLW0177)
// nested-min-max / W3301 (PLW3301)
// non-ascii-file-name / W2402 (N999)
// pointless-exception-statement / W0133 (PLW0133)
// pointless-statement / W0104 (B018)
// protected-access / W0212 (SLF001)
// raise-missing-from / W0707 (B904)
// redefined-builtin / W0622 (A001)
// redefined-loop-name / W2901 (PLW2901)
// redundant-u-string-prefix / W1406 (UP025)
// reimported / W0404 (F811)
// self-assigning-variable / W0127 (PLW0127)
// subprocess-popen-preexec-fn / W1509 (PLW1509)
// subprocess-run-check / W1510 (PLW1510)
// super-without-brackets / W0245 (PLW0245)
// try-except-raise / W0706 (TRY302)
// unknown-option-value / W0012
// unnecessary-lambda / W0108 (PLW0108)
// unnecessary-pass / W0107 (PIE790)
// unnecessary-semicolon / W0301 (E703)
// unspecified-encoding / W1514 (PLW1514)
// unused-argument / W0613 (ARG001)
// unused-format-string-argument / W1304 (F507)
// unused-format-string-key / W1301 (F504)
// unused-import / W0611 (F401)
// unused-variable / W0612 (F841)
// useless-else-on-loop / W0120 (PLW0120)
// useless-with-lock / W2101 (PLW2101)
// using-f-string-in-unsupported-version / W2601
// wildcard-import / W0401 (F403)
// bad-classmethod-argument / C0202 (N804)
// bad-docstring-quotes / C0198 (Q002)
// compare-to-empty-string / C1901 (PLC1901)
// consider-iterating-dictionary / C0201 (SIM118)
// consider-using-any-or-all / C0501 (SIM110, SIM111)
// consider-using-dict-items / C0206 (PLC0206)
// docstring-first-line-empty / C0199 (D210)
// empty-docstring / C0112 (D419)
// import-outside-toplevel / C0415 (PLC0415)
// import-private-name / C2701 (PLC2701)
// invalid-name / C0103 (N815)
// line-too-long / C0301 (E501)
// misplaced-comparison-constant / C2201 (SIM300)
// missing-class-docstring / C0115 (D101)
// missing-final-newline / C0304 (W292)
// missing-function-docstring / C0116 (D103)
// missing-module-docstring / C0114 (D100)
// multiple-imports / C0410 (E401)
// multiple-statements / C0321 (E701, E702)
// non-ascii-module-import / C2403 (PLC2403)
// non-ascii-name / C2401 (PLC2401)
// single-string-used-for-slots / C0205 (PLC0205)
// singleton-comparison / C0121 (E711 , E712)
// trailing-newlines / C0305 (W391)
// trailing-whitespace / C0303 (W291)
// typevar-double-variance / C0131 (PLC0131)
// typevar-name-incorrect-variance / C0105 (PLC0105)
// typevar-name-mismatch / C0132 (PLC0132)
// ungrouped-imports / C0412 (I001)
// unidiomatic-typecheck / C0123 (E721)
// unnecessary-direct-lambda-call / C3002 (PLC3002)
// unnecessary-dunder-call / C2801 (PLC2801)
// unnecessary-lambda-assignment / C3001 (E731)
// unneeded-not / C0113 (SIM208)
// use-implicit-booleaness-not-len / C1802 (PLC1802)
// use-sequence-for-iteration / C0208 (PLC0208)
// useless-import-alias / C0414 (PLC0414)
// wrong-import-order / C0411 (I001)
// wrong-import-position / C0413 (E402 )
// comparison-of-constants / R0133 (PLR0133)
// comparison-with-itself / R0124 (PLR0124)
// consider-alternative-union-syntax / R6003 (UP007)
// consider-merging-isinstance / R1701 (SIM101)
// consider-using-alias / R6002 (UP006)
// consider-using-augmented-assign / R6104 (PLR6104)
// consider-using-dict-comprehension / R1717 (C402)
// consider-using-from-import / R0402 (PLR0402)
// consider-using-generator / R1728 (C417)
// consider-using-get / R1715 (SIM401)
// consider-using-in / R1714 (PLR1714)
// consider-using-min-builtin / R1730 (PLR1730)
// consider-using-max-builtin / R1731 (PLR1730)
// consider-using-set-comprehension / R1718 (C401)
// consider-using-sys-exit / R1722 (PLR1722)
// consider-using-ternary / R1706 (PLR1706 )
// consider-using-with / R1732 (SIM115)
// else-if-used / R5501 (PLR5501)
// empty-comment / R2044 (PLR2044)
// inconsistent-return-statements / R1710 (RET501, RET502)
// literal-comparison / R0123 (F632)
// magic-value-comparison / R2004 (PLR2004)
// no-classmethod-decorator / R0202 (PLR0202)
// no-else-break / R1723 (RET508)
// no-else-continue / R1724 (RET507)
// no-else-raise / R1720 (RET506)
// no-else-return / R1705 (RET505)
// no-self-use / R6301 (PLR6301)
// no-staticmethod-decorator / R0203 (PLR0203)
// property-with-parameters / R0206 (PLR0206)
// redefined-argument-from-local / R1704 (PLR1704)
// simplifiable-if-expression / R1719 (SIM210, SIM211)
// simplifiable-if-statement / R1703 (SIM108)
// super-with-arguments / R1725 (UP008)
// too-complex / R1260 (C901)
// too-many-arguments / R0913 (PLR0913)
// too-many-boolean-expressions / R0916 (PLR0916)
// too-many-branches / R0912 (PLR0912)
// too-many-locals / R0914 (PLR0914)
// too-many-nested-blocks / R1702 (PLR1702)
// too-many-public-methods / R0904 (PLR0904)
// too-many-return-statements / R0911 (PLR0911)
// too-many-statements / R0915 (PLR0915)
// trailing-comma-tuple / R1707 (COM818)
// unnecessary-comprehension / R1721 (C416)
// unnecessary-dict-index-lookup / R1733 (PLR1733)
// unnecessary-list-index-lookup / R1736 (PLR1736)
// use-a-generator / R1729 (C419)
// use-dict-literal / R1735 (C406)
// use-list-literal / R1734 (C405)
// use-set-for-membership / R6201 (PLR6201)
// useless-object-inheritance / R0205 (UP004)
// useless-option-value / R0022
// useless-return / R1711 (PLR1711)


// Example of the final output:
//
// disable = [
//     "E0237",  # assigning-non-slot
//     "E1142",  # await-outside-async
//     "E0014",  # bad-configuration-section
//     "E1300",  # bad-format-character
//     "E0013",  # bad-plugin-value
//     "E1310",  # bad-str-strip-call
//     "E1307",  # bad-string-format-type
//     "E2502",  # bidirectional-unicode
//     "E6005",  # broken-collections-callable
//     "E6004",  # broken-noreturn
//     "E0116",  # continue-in-finally
//     "E0108",  # duplicate-argument-name
//     "E0241",  # duplicate-bases
//     "E1303",  # format-needs-mapping
//     "E0102",  # function-redefined
//     "E0100",  # init-is-generator
//     "E0605",  # invalid-all-format
//     "E0604",  # invalid-all-object
//     "E0304",  # invalid-bool-returned
//     "E0308",  # invalid-bytes-returned
//     "E2510",  # invalid-character-backspace
//     "E2513",  # invalid-character-esc
//     "E2514",  # invalid-character-nul
//     "E2512",  # invalid-character-sub
//     "E2515",  # invalid-character-zero-width-space
//     "E0309",  # invalid-hash-returned
//     "E0305",  # invalid-index-returned
//     "E0303",  # invalid-length-returned
//     "E1206",  # logging-too-few-args
//     "E1205",  # logging-too-many-args
//     "E0704",  # misplaced-bare-raise
//     "E1304",  # missing-format-string-key
//     "E1302",  # mixed-format-string
//     "E4703",  # modified-iterating-set
//     "E0213",  # no-self-argument
//     "E0107",  # nonexistent-operator
//     "E0115",  # nonlocal-and-global
//     "E0117",  # nonlocal-without-binding
//     "E0103",  # not-in-loop
//     "E0711",  # notimplemented-raised
//     "E0643",  # potential-index-error
//     "E0402",  # relative-beyond-top-level
//     "E1132",  # repeated-keyword
//     "E0106",  # return-arg-in-generator
//     "E0101",  # return-in-init
//     "E0104",  # return-outside-function
//     "E1519",  # singledispatch-method
//     "E1520",  # singledispatchmethod-function
//     "E0001",  # syntax-error
//     "E1306",  # too-few-format-args
//     "E1305",  # too-many-format-args
//     "E0112",  # too-many-star-expressions
//     "E1301",  # truncated-format-string
//     "E0603",  # undefined-all-variable
//     "E0602",  # undefined-variable
//     "E0302",  # unexpected-special-method-signature
//     "E0118",  # used-prior-global-declaration
//     "E1700",  # yield-inside-async-function
//     "E0105",  # yield-outside-function
//     "W1401",  # anomalous-backslash-in-string
//     "W0129",  # assert-on-string-literal
//     "W0199",  # assert-on-tuple
//     "W3201",  # bad-dunder-name
//     "W1302",  # bad-format-string
//     "W1501",  # bad-open-mode
//     "W0211",  # bad-staticmethod-argument
//     "W0702",  # bare-except
//     "W0711",  # binary-op-exception
//     "W1502",  # boolean-datetime
//     "W0718",  # broad-exception-caught
//     "W0719",  # broad-exception-raised
//     "W0640",  # cell-var-from-loop
//     "W0160",  # consider-ternary-expression
//     "W0102",  # dangerous-default-value
//     "W0705",  # duplicate-except
//     "W0109",  # duplicate-key
//     "W0130",  # duplicate-value
//     "W1641",  # eq-without-hash
//     "W0123",  # eval-used
//     "W0122",  # exec-used
//     "W0106",  # expression-not-assigned
//     "W1309",  # f-string-without-interpolation
//     "W0511",  # fixme
//     "W1515",  # forgotten-debug-statement
//     "W1305",  # format-combined-specification
//     "W1310",  # format-string-without-interpolation
//     "W0604",  # global-at-module-level
//     "W0603",  # global-statement
//     "W0602",  # global-variable-not-assigned
//     "W1404",  # implicit-str-concat
//     "W0406",  # import-self
//     "W1405",  # inconsistent-quotes
//     "W1508",  # invalid-envvar-default
//     "W1113",  # keyword-arg-before-vararg
//     "W1202",  # logging-format-interpolation
//     "W1203",  # logging-fstring-interpolation
//     "W1201",  # logging-not-lazy
//     "W0150",  # lost-exception
//     "W1518",  # method-cache-max-size-none
//     "W0410",  # misplaced-future
//     "W1303",  # missing-format-argument-key
//     "W0131",  # named-expr-without-context
//     "W0177",  # nan-comparison
//     "W3301",  # nested-min-max
//     "W2402",  # non-ascii-file-name
//     "W0133",  # pointless-exception-statement
//     "W0104",  # pointless-statement
//     "W0212",  # protected-access
//     "W0707",  # raise-missing-from
//     "W0622",  # redefined-builtin
//     "W2901",  # redefined-loop-name
//     "W1406",  # redundant-u-string-prefix
//     "W0404",  # reimported
//     "W0127",  # self-assigning-variable
//     "W1509",  # subprocess-popen-preexec-fn
//     "W1510",  # subprocess-run-check
//     "W0245",  # super-without-brackets
//     "W0706",  # try-except-raise
//     "W0012",  # unknown-option-value
//     "W0108",  # unnecessary-lambda
//     "W0107",  # unnecessary-pass
//     "W0301",  # unnecessary-semicolon
//     "W1514",  # unspecified-encoding
//     "W0613",  # unused-argument
//     "W1304",  # unused-format-string-argument
//     "W1301",  # unused-format-string-key
//     "W0611",  # unused-import
//     "W0612",  # unused-variable
//     "W0120",  # useless-else-on-loop
//     "W2101",  # useless-with-lock
//     "W2601",  # using-f-string-in-unsupported-version
//     "W0401",  # wildcard-import
//     "C0202",  # bad-classmethod-argument
//     "C0198",  # bad-docstring-quotes
//     "C1901",  # compare-to-empty-string
//     "C0201",  # consider-iterating-dictionary
//     "C0501",  # consider-using-any-or-all
//     "C0206",  # consider-using-dict-items
//     "C0199",  # docstring-first-line-empty
//     "C0112",  # empty-docstring
//     "C0415",  # import-outside-toplevel
//     "C2701",  # import-private-name
//     "C0103",  # invalid-name
//     "C0301",  # line-too-long
//     "C2201",  # misplaced-comparison-constant
//     "C0115",  # missing-class-docstring
//     "C0304",  # missing-final-newline
//     "C0116",  # missing-function-docstring
//     "C0114",  # missing-module-docstring
//     "C0410",  # multiple-imports
//     "C0321",  # multiple-statements
//     "C2403",  # non-ascii-module-import
//     "C2401",  # non-ascii-name
//     "C0205",  # single-string-used-for-slots
//     "C0121",  # singleton-comparison
//     "C0305",  # trailing-newlines
//     "C0303",  # trailing-whitespace
//     "C0131",  # typevar-double-variance
//     "C0105",  # typevar-name-incorrect-variance
//     "C0132",  # typevar-name-mismatch
//     "C0412",  # ungrouped-imports
//     "C0123",  # unidiomatic-typecheck
//     "C3002",  # unnecessary-direct-lambda-call
//     "C2801",  # unnecessary-dunder-call
//     "C3001",  # unnecessary-lambda-assignment
//     "C0113",  # unneeded-not
//     "C1802",  # use-implicit-booleaness-not-len
//     "C0208",  # use-sequence-for-iteration
//     "C0414",  # useless-import-alias
//     "C0411",  # wrong-import-order
//     "C0413",  # wrong-import-position
//     "R0133",  # comparison-of-constants
//     "R0124",  # comparison-with-itself
//     "R6003",  # consider-alternative-union-syntax
//     "R1701",  # consider-merging-isinstance
//     "R6002",  # consider-using-alias
//     "R6104",  # consider-using-augmented-assign
//     "R1717",  # consider-using-dict-comprehension
//     "R0402",  # consider-using-from-import
//     "R1728",  # consider-using-generator
//     "R1715",  # consider-using-get
//     "R1714",  # consider-using-in
//     "R1730",  # consider-using-min-builtin
//     "R1731",  # consider-using-max-builtin
//     "R1718",  # consider-using-set-comprehension
//     "R1722",  # consider-using-sys-exit
//     "R1706",  # consider-using-ternary
//     "R1732",  # consider-using-with
//     "R5501",  # else-if-used
//     "R2044",  # empty-comment
//     "R1710",  # inconsistent-return-statements
//     "R0123",  # literal-comparison
//     "R2004",  # magic-value-comparison
//     "R0202",  # no-classmethod-decorator
//     "R1723",  # no-else-break
//     "R1724",  # no-else-continue
//     "R1720",  # no-else-raise
//     "R1705",  # no-else-return
//     "R6301",  # no-self-use
//     "R0203",  # no-staticmethod-decorator
//     "R0206",  # property-with-parameters
//     "R1704",  # redefined-argument-from-local
//     "R1719",  # simplifiable-if-expression
//     "R1703",  # simplifiable-if-statement
//     "R1725",  # super-with-arguments
//     "R1260",  # too-complex
//     "R0913",  # too-many-arguments
//     "R0916",  # too-many-boolean-expressions
//     "R0912",  # too-many-branches
//     "R0914",  # too-many-locals
//     "R1702",  # too-many-nested-blocks
//     "R0904",  # too-many-public-methods
//     "R0911",  # too-many-return-statements
//     "R0915",  # too-many-statements
//     "R1707",  # trailing-comma-tuple
//     "R1721",  # unnecessary-comprehension
//     "R1733",  # unnecessary-dict-index-lookup
//     "R1736",  # unnecessary-list-index-lookup
//     "R1729",  # use-a-generator
//     "R1735",  # use-dict-literal
//     "R1734",  # use-list-literal
//     "R6201",  # use-set-for-membership
//     "R0205",  # useless-object-inheritance
//     "R0022",  # useless-option-value
//     "R1711",  # useless-return
// ]
