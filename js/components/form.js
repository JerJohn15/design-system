// All select menus or select buttons with either of these classes
// get converted to the chosen style
$('.usajobs-form-select--entry').chosen();

$('.usajobs-button-select').chosen({
  disable_search_threshold: 10,
  inherit_select_classes: true
});
