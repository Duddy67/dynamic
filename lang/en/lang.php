<?php

return [
    'plugin' => [
        'name' => 'Bookend',
        'description' => ''
    ],
    'bookend' => [
      'books' => 'Books',
      'categories' => 'Categories',
      'tab' => 'Bookend',
      'access_books' => 'Manage the books',
      'access_categories' => 'Manage the book categories',
      'access_publish' => 'Allowed to publish books',
      'access_delete' => 'Allowed to delete books',
      'access_other_books' => 'Manage other users books',
      'manage_settings' => 'Manage Bookend settings',
    ],
    'books' => [
      'new_book' => 'New book',
      'filter_category' => 'Category',
      'filter_date' => 'Date',
      'filter_status' => 'Status',
      'reorder' => 'Reorder Books',
      'return_to_books' => 'Return to the book list',
    ],
    'book' => [
      'title_placeholder' => 'New book title',
      'name_placeholder' => 'New book name',
      'slug_placeholder' => 'new-book-slug',
      'tab_categories' => 'Categories',
      'tab_publications' => 'Publications',
      'categories_comment' => 'Select categories for the book',
      'categories_placeholder' => 'There are no categories, you should create one first!',
    ],
    'categories' => [
      'reorder' => 'Reorder Categories',
      'return_to_categories' => 'Return to the book category list',
    ],
    'category' => [
      'name_placeholder' => 'New category name',
      'slug_placeholder' => 'new-category-slug'
    ],
    // Boilerplate attributes.
    'attribute' => [
      'title' => 'Title',
      'name' => 'Name',
      'slug' => 'Slug',
      'description' => 'Description',
      'created_at' => 'Created at',
      'created_by' => 'Created by',
      'updated_at' => 'Updated at',
      'updated_by' => 'Updated by',
      'tab_edit' => 'Edit',
      'tab_manage' => 'Manage',
      'status' => 'Status',
      'published_up' => 'Start publishing',
      'published_down' => 'Finish publishing',
      'access' => 'Access',
      'viewing_access' => 'Viewing access',
      'category' => 'Category',
      'main_category' => 'Main category',
      'parent_category' => 'Parent category',
      'none' => 'None',
    ],
    'status' => [
      'published' => 'Published',
      'unpublished' => 'Unpublished',
      'trashed' => 'Trashed',
      'archived' => 'Archived'
    ],
    'action' => [
      'new' => 'New Book',
      'publish' => 'Publish',
      'unpublish' => 'Unpublish',
      'trash' => 'Trash',
      'archive' => 'Archive',
      'delete' => 'Delete',
      'save' => 'Save',
      'save_and_close' => 'Save and close',
      'create' => 'Create',
      'create_and_close' => 'Create and close',
      'cancel' => 'Cancel',
      'check_in' => 'Check-in',
      'publish_success' => 'Successfully published those items.',
      'unpublish_success' => 'Successfully unpublished those items.',
      'archive_success' => 'Successfully archived those items.',
      'trash_success' => 'Successfully trashed those items.',
      'delete_success' => 'Successfully deleted those items.',
      'check_in_success' => 'Successfully checked in those items.',
      'parent_item_unpublished' => 'Cannot publish this item as its parent item is unpublished.',
      'previous' => 'Previous',
      'next' => 'Next',
      'deletion_confirmation' => 'Are you sure you want to delete the selected items ?',
      'cannot_reorder' => 'Cannot reorder items by category as none or more than 1 categories are selected. Please select only 1 category.',
      'checked_out_item' => 'This item cannot be modified as it\'s checked out. Please ensure no one is editing this item.',
      'check_out_do_not_match' => 'The user checking out doesn\'t match the user who checked out the item. You are not permitted to use that link to directly access that page.',
      'editing_not_allowed' => 'You are not allowed to edit this item.',
      'used_as_main_category' => 'The ":name" category cannot be deleted as it is used as main category in one or more books.',
      'checked_out_item' => 'The ":name" item cannot be deleted as it is currently checked out by a user.',
      'used_in_publication' => 'The ":name" item cannot be deleted as it is currently used in one or more publications.',
      'not_allowed_to_modify_item' => 'You are not allowed to modify the ":name" item.',
    ],
    'sorting' => [
        'title_asc' => 'Title (ascending)',
        'title_desc' => 'Title (descending)',
        'created_asc' => 'Created (ascending)',
        'created_desc' => 'Created (descending)',
        'updated_asc' => 'Updated (ascending)',
        'updated_desc' => 'Updated (descending)',
        'published_asc' => 'Published (ascending)',
        'published_desc' => 'Published (descending)',
        'order_asc' => 'Order by category (ascending)',
        'order_desc' => 'Order by category (descending)',
        'random' => 'Random'
    ],
    'settings' => [
      'category_title' => 'Category List',
      'category_description' => 'Displays a list of book categories on the page.',
      'category_slug' => 'Category slug',
      'category_slug_description' => "Look up the book category using the supplied slug value. This property is used by the default component partial for marking the currently active category.",
      'category_display_empty' => 'Display empty categories',
      'category_display_empty_description' => 'Show categories that do not have any books.',
      'category_display_as_menu' => 'Display categories as a menu',
      'category_display_as_menu_description' => 'Display categories as a menu',
      'category_page' => 'Category page',
      'category_page_description' => 'Name of the category page file for the category links. This property is used by the default component partial.',
      'group_links' => 'Links',
      'book_title' => 'Book',
      'book_description' => 'Displays a book on the page.',
      'book_slug' => 'Book slug',
      'book_slug_description' => "Look up the book using the supplied slug value.",
      'book_category' => 'Category page',
      'book_category_description' => 'Name of the category page file for the category links. This property is used by the default component partial.',
      'books_title' => 'Book List',
      'books_description' => 'Displays a list of latest books on the page.',
      'books_pagination' => 'Page number',
      'books_pagination_description' => 'This value is used to determine what page the user is on.',
      'books_filter' => 'Category filter',
      'books_filter_description' => 'Enter a category slug or URL parameter to filter the books by. Leave empty to show all books.',
      'books_per_page' => 'Books per page',
      'books_per_page_validation' => 'Invalid format of the books per page value',
      'books_no_books' => 'No books message',
      'books_no_books_description' => 'Message to display in the book list in case if there are no books. This property is used by the default component partial.',
      'books_no_books_default' => 'No books found',
      'books_order' => 'Book order',
      'books_order_description' => 'Attribute on which the books should be ordered',
      'books_category' => 'Category page',
      'books_category_description' => 'Name of the category page file for the "Posted into" category links. This property is used by the default component partial.',
      'books_book' => 'Book page',
      'books_book_description' => 'Name of the book page file for the "Learn more" links. This property is used by the default component partial.',
      'books_except_book' => 'Except book',
      'books_except_book_description' => 'Enter ID/URL or variable with book ID/URL you want to exclude. You may use a comma-separated list to specify multiple books.',
      'books_except_book_validation' => 'Book exceptions must be a single slug or ID, or a comma-separated list of slugs and IDs',
      'books_except_categories' => 'Except categories',
      'books_except_categories_description' => 'Enter a comma-separated list of category slugs or variable with such a list of categories you want to exclude',
      'books_except_categories_validation' => 'Category exceptions must be a single category slug, or a comma-separated list of slugs',
      'group_exceptions' => 'Exceptions',
      'featured_title' => 'Featured',
      'featured_description' => 'Displays books of a specific category in the home page.',
      'featured_id' => 'Category ID',
      'featured_id_description' => 'Enter the slug or the numeric id of a category to get the books from. Add a "id:" prefix for numeric ids (eg: id:25).',
      'invalid_file_name' => 'Invalid file name. File name must start with: "category-level-" followed by a numeric value, (eg: category-level-1.htm). The numeric value refers to the depht of the category path.',
    ],
    'global_settings' => [
      'tab_general' => 'General',
      'max_characters' => 'Max characters',
      'max_characters_comment' => 'Max characters',
      'show_breadcrumb_label' => 'Show breadcrumb',
      'show_breadcrumb_comment' => 'Show a breadcrumb in book and category views.',
    ],
    'messages' => [
      'required_field' => 'This field is required'
    ]
];
