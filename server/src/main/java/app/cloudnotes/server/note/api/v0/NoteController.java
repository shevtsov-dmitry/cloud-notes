package app.cloudnotes.server.note.api.v0;

import app.cloudnotes.server.note.Note;
import app.cloudnotes.server.note.NoteWithTextDTO;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v0/notes")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping(value = "/new", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Long> createTextNoteWithText(@RequestBody NoteWithTextDTO textNote) {
        return ResponseEntity.ok(noteService.createWithText(textNote));
    }

    @PostMapping(value = "/add/image/{noteId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Void> addImageToNote(@PathVariable Long noteId, @RequestParam MultipartFile image) {
        if (image.isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        noteService.saveImageForNote(noteId, image);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(value = "/by/ids", consumes = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<List<Note>> getTextNotesByIds(@RequestBody List<Long> ids) {
        return ResponseEntity.ok(noteService.getAllTextNotesByIds(ids));
    }

    @DeleteMapping(value = "", consumes = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<Void> deleteTextNotesByIds(@RequestBody List<Long> ids) {
        noteService.deleteTextNotesByIds(ids);
        return ResponseEntity.noContent().build();
    }


}
