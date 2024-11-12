package client

import "core:fmt"
import "core:io"

show_greeting :: proc() {
	fmt.println("Welcome to Cloud Notes Application!")
}

Options :: enum {
	ADD_NOTE,
	SHOW_NOTE,
	SHOW_ALL_NOTES,
	REMOVE_NOTE,
	EXIT,
}
