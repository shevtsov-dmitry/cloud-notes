package app.cloudnotes.server.note.api.v0;

import app.cloudnotes.server.note.Note;
import app.cloudnotes.server.note.NoteWithTextDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Long createWithText(NoteWithTextDTO textNote) {
        final Note note = Note.builder()
                .title(textNote.title())
                .textContent(textNote.textContent())
                .build();
        return noteRepository.save(note).getId();
    }

    public void saveImageForNote(Long noteId, MultipartFile image) {
    }

    public List<Note> getAllTextNotesByIds(List<Long> ids) {
        return noteRepository.findAllById(ids);
    }

    public void deleteTextNotesByIds(List<Long> ids) {
        ids.forEach(noteRepository::deleteById);
    }

}
