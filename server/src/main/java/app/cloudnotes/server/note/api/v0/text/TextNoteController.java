package app.cloudnotes.server.note.api.v0.text;

import app.cloudnotes.server.note.api.v0.NoteService;
import app.cloudnotes.server.note.notekinds.TextNote;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v0/notes/text")
public class TextNoteController {

    private final NoteService noteService;

    public TextNoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping
    public ResponseEntity<Long> createTextNote(@RequestBody TextNote textNote) {
        return ResponseEntity.ok(noteService.createTextNote(textNote));
    }

    @GetMapping
    public ResponseEntity<List<TextNote>> getAllTextNotesByIds(@RequestBody List<Long> ids) {
        List<TextNote> notes = noteService.getAllTextNotesByIds(ids);
        if (notes.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(notes);
        }
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteTextNotesByIds(@RequestBody List<Long> ids) {
        noteService.deleteTextNotesByIds(ids);
        return ResponseEntity.noContent().build();
    }


}
