package app.cloudnotes.server.note.api.v0;

import app.cloudnotes.server.note.api.v0.text.TextNoteRepository;
import app.cloudnotes.server.note.notekinds.TextNote;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    private final TextNoteRepository textNoteRepository;

    public NoteService(TextNoteRepository textNoteRepository) {
        this.textNoteRepository = textNoteRepository;
    }

    public Long createTextNote(TextNote textNote) {
        return textNoteRepository.save(textNote).getId();
    }

    public List<TextNote> getAllTextNotesByIds(List<Long> ids) {
        return textNoteRepository.findAllById(ids);
    }

    public void deleteTextNotesByIds(List<Long> ids) {
        ids.forEach(textNoteRepository::deleteById);
    }

}
