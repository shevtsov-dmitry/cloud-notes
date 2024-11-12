package tests

import "core:testing"

@(test)
my_test :: proc(t: ^testing.T) {
	// This tests succeeds by default.
	testing.expectf(t, true, "passed well")
}
