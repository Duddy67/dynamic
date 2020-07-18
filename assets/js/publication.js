(function($) {
  // A global variable to store then access the dynamical item objects.
  const GETTER = {};

  // Run a function when the page is fully loaded including graphics.
  $(window).load(function() {

    // The input element containing the root location.
    let rootLocation = $('#root-location').val();
    // Sets the dynamic item properties.
    let props = {'vendor':'codalia', 'plugin':'bookend', 'item':'publication', 'ordering':true, 'rootLocation':rootLocation, 'rowsCells':[5,5], 'Select2':true, 'nbItemsPerPage':3};

    // Stores the newly created object.
    GETTER.publication = new Codalia.DynamicItem(props);
    // Sets the validating function.
    $('[id^="on-save"]').click( function(e) { validateFields(e); });

    let bookId = $('#Form-field-Book-id').val();
    let token = $('input[name="_token"]').val();

    // Prepares then run the Ajax query.
    const ajax = new Codalia.Ajax();
    let url = rootLocation+'/backend/codalia/bookend/books/json/'+bookId+'/'+token;
    let params = {'method':'GET', 'url':url, 'dataType':'json', 'async':true};
    ajax.prepare(params);
    ajax.process(getAjaxResult);
  });

  validateFields = function(e) {
    let fields = {'editor':'', 'standard':'', 'date-release_date':''};

    if(!GETTER.publication.validateFields(fields)) {
      // Shows the dynamic item tab.
      $('.nav-tabs a[href="#secondarytab-4"]').tab('show');

      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  /** Callback functions **/

  getAjaxResult = function(result) {
    if(result.success !== true) {
      $.each(result, function(i, item) { GETTER.publication.createItem(item); });
    }
    else {
      alert('Error: '+result.message);
    }
  }

  populatePublicationItem = function(idNb, data) {
    // Defines the default field values.
    if(data === undefined) {
      data = {'id':'', 'editor':'', 'translations':[], 'standard':'', 'ebook':0, 'version':'integral', 'release_date':'', 'category_id':'', 'category_name':''};
    }

    // Element label.
    attribs = {'title':CodaliaLang.publication.editor_desc, 'class':'item-label', 'id':'publication-editor-label-'+idNb};
    $('#publication-row-1-cell-1-'+idNb).append(GETTER.publication.createElement('span', attribs));
    $('#publication-editor-label-'+idNb).text(CodaliaLang.publication.editor_label);

    // Text input tag:
    attribs = {'type':'text', 'name':'publication_editor_'+idNb, 'id':'publication-editor-'+idNb, 'class':'form-control', 'value':data.editor};
    $('#publication-row-1-cell-1-'+idNb).append(GETTER.publication.createElement('input', attribs));

    // Element label.
    attribs = {'title':CodaliaLang.publication.standard_desc, 'class':'item-label', 'id':'publication-standard-label-'+idNb};
    $('#publication-row-1-cell-2-'+idNb).append(GETTER.publication.createElement('span', attribs));
    $('#publication-standard-label-'+idNb).text(CodaliaLang.publication.standard_label);

    // Select tag:
    attribs = {'name':'publication_standard_'+idNb, 'id':'publication-standard-'+idNb, 'class':'form-control custom-select'};
    elem = GETTER.publication.createElement('select', attribs);

    // Builds the select options.
    let standards = ['isbn', 'issn', 'istc', 'isni', 'apa'];
    let options = '<option value="">- Select -</option>';
    for(let i = 0; i < 5; i++) {
      let value = standards[i];
      let text = standards[i].toUpperCase();
      let selected = '';

      if(data.standard == value) {
	selected = 'selected="selected"';
      }

      options += '<option value="'+value+'" '+selected+'>'+text+'</option>';
    }

    $('#publication-row-1-cell-2-'+idNb).append(elem);
    $('#publication-standard-'+idNb).html(options);
    // Uses the Select2 plugin.
    $('#publication-standard-'+idNb).select2();

    // Element label.
    attribs = {'title':CodaliaLang.publication.translations_desc, 'class':'item-label', 'id':'publication-translations-label-'+idNb};
    $('#publication-row-1-cell-3-'+idNb).append(GETTER.publication.createElement('span', attribs));
    $('#publication-translations-label-'+idNb).text(CodaliaLang.publication.translations_label);

    // Multiple Select tag:
    attribs = {'name':'publication_translations_'+idNb+'[]', 'id':'publication-translations-'+idNb, 'multiple':'true', 'class':'form-control custom-select'};
    elem = GETTER.publication.createElement('select', attribs);

    // Builds the select options.
    let translations = ['english', 'french', 'spanish', 'german', 'italian', 'russian', 'chinese', 'japanese'];
    options = '<option value="">- Select -</option>';
    for(let i = 0; i < 8; i++) {
      let value = translations[i];
      let text = translations[i].charAt(0).toUpperCase() + translations[i].slice(1);
      let selected = '';

      if(GETTER.publication.inArray(value, data.translations)) {
	selected = 'selected="selected"';
      }

      options += '<option value="'+value+'" '+selected+'>'+text+'</option>';
    }

    $('#publication-row-1-cell-3-'+idNb).append(elem);
    $('#publication-translations-'+idNb).html(options);
    // Uses the Select2 plugin.
    $('#publication-translations-'+idNb).select2();

    // Element label.
    attribs = {'title':CodaliaLang.publication.version_desc, 'class':'item-label', 'id':'publication-version-label-'+idNb};
    $('#publication-row-2-cell-1-'+idNb).append(GETTER.publication.createElement('span', attribs));
    $('#publication-version-label-'+idNb).text(CodaliaLang.publication.version_label);

    // Radio buttons:
    attribs = {'type':'radio', 'name':'publication_version_'+idNb, 'id':'publication-version-integral-'+idNb, 'value':'integral'};

    if(data.version == 'integral') {
      attribs.checked = 'checked';
    }

    $('#publication-row-2-cell-1-'+idNb).append(GETTER.publication.createElement('input', attribs));

    // Option label
    attribs = {'title':CodaliaLang.publication.integral_version_desc, 'class':'radio-option', 'id':'publication-integral-option-'+idNb};
    $('#publication-row-2-cell-1-'+idNb).append(GETTER.publication.createElement('span', attribs));
    $('#publication-integral-option-'+idNb).text(CodaliaLang.publication.integral_version_label);

    attribs = {'type':'radio', 'name':'publication_version_'+idNb, 'id':'publication-version-redacted-'+idNb, 'value':'redacted'};

    if(data.version == 'redacted') {
      attribs.checked = 'checked';
    }

    $('#publication-row-2-cell-1-'+idNb).append(GETTER.publication.createElement('input', attribs));

    // Option label
    attribs = {'title':CodaliaLang.publication.redacted_version_desc, 'class':'radio-option', 'id':'publication-redacted-option-'+idNb};
    $('#publication-row-2-cell-1-'+idNb).append(GETTER.publication.createElement('span', attribs));
    $('#publication-redacted-option-'+idNb).text(CodaliaLang.publication.redacted_version_label);

    // Element label.
    attribs = {'title':CodaliaLang.publication.ebook_desc, 'class':'item-label', 'id':'publication-ebook-label-'+idNb};
    $('#publication-row-2-cell-2-'+idNb).append(GETTER.publication.createElement('span', attribs));
    $('#publication-ebook-label-'+idNb).text(CodaliaLang.publication.ebook_label);

    // Checkbox tag:
    attribs = {'type':'checkbox', 'name':'publication_ebook_'+idNb, 'id':'publication-ebook-'+idNb, 'value':'ebook'};

    if(data.ebook == 1) {
      attribs.checked = 'checked';
    }

    $('#publication-row-2-cell-2-'+idNb).append(GETTER.publication.createElement('input', attribs));

    // Element label.
    attribs = {'title':CodaliaLang.publication.release_date_desc, 'class':'item-label', 'id':'publication-release-date-label-'+idNb};
    $('#publication-row-2-cell-3-'+idNb).append(GETTER.publication.createElement('span', attribs));
    $('#publication-release-date-label-'+idNb).text(CodaliaLang.publication.release_date_label);

    // Datetime fields.
    GETTER.publication.createDateTimeFields('release_date', idNb, 'publication-row-2-cell-3-'+idNb, data.release_date, true);

    // Element label.
    attribs = {'title':CodaliaLang.publication.release_date_desc, 'class':'item-label', 'id':'publication-category-label-'+idNb};
    $('#publication-row-2-cell-4-'+idNb).append(GETTER.publication.createElement('span', attribs));
    $('#publication-category-label-'+idNb).text(CodaliaLang.publication.release_date_label);

    // Creates the select button (specific to October CMS).
    attribs = {'data-control':'popup', 'data-handler':'onLoadCategoryList', 'href':'javascript:;', 'onclick':'setCurrentItemData('+idNb+', "publication");', 'class':'btn btn-primary select-btn', 'id':'publication-select-'+idNb};
    $('#publication-row-2-cell-4-'+idNb).append(GETTER.publication.createElement('a', attribs));
    $('#publication-select-'+idNb).text('Select');

    attribs = {'type':'text', 'disabled':'disabled', 'id':'publication-category-name-'+idNb, 'class':'form-control selected-item-name', 'value':data.category_name};
    $('#publication-row-2-cell-4-'+idNb).append(GETTER.publication.createElement('input', attribs));

    // Creates the hidden input element to store the id of the selected item in the modal window.
    attribs = {'type':'hidden', 'name':'publication_category_id_'+idNb, 'id':'publication-category-id-'+idNb, 'value':data.category_id};
    $('#publication-row-2-cell-4-'+idNb).append(GETTER.publication.createElement('input', attribs));

  }

  reverseOrder = function(direction, idNb, dynamicItemType) {
    // Calls the parent function from the corresponding instance.
    GETTER[dynamicItemType].reverseOrder(direction, idNb);
  }

  browsingPages = function(pageNb, dynamicItemType) {
    // Calls the parent function from the corresponding instance.
    GETTER[dynamicItemType].updatePagination(pageNb);
  }

  beforeRemoveItem = function(idNb, dynamicItemType) {
    // Execute here possible tasks before the item deletion.
  }

  afterRemoveItem = function(idNb, dynamicItemType) {
    // Execute here possible tasks after the item deletion.
  }

  selectCategoryItem = function(id, name) {
    // Fetches the data previously set.
    let idNb = $('#current-item-id').val();
    let dynamicItemType = $('#current-item-type').val();
    // Calls the parent function from the corresponding instance.
    GETTER[dynamicItemType].selectItem(id, name, idNb, 'category', true);
  }

  setCurrentItemData = function(idNb, dynamicItemType) {
    $('#current-item-id').val(idNb);
    $('#current-item-type').val(dynamicItemType);
  }

})(jQuery);
