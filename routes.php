<?php 
use Codalia\Bookend\Models\Book;

// Redirects all the ordering views except for the reorder one.

Route::get('backend/codalia/bookend/orderings', function() {
    return redirect('backend/codalia/bookend/books');
});

Route::get('backend/codalia/bookend/orderings/create', function() {
    return redirect('backend/codalia/bookend/books');
});

Route::get('backend/codalia/bookend/orderings/update/{id}', function() {
    return redirect('backend/codalia/bookend/books');
});

Route::get('backend/codalia/bookend/orderings/preview/{id}', function() {
    return redirect('backend/codalia/bookend/books');
});

Route::get('backend/codalia/bookend/books/json/{id}/{token}', function($id, $token) {
    if(\Session::token() !== $token) {
	return redirect('404');
    }

    echo json_encode(Book::getPublications($id));

})->middleware('web');
