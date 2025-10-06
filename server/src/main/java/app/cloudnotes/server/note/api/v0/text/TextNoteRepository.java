package app.cloudnotes.server.note.api.v0.text;

import app.cloudnotes.server.note.notekinds.TextNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TextNoteRepository extends JpaRepository<TextNote, Long> {
}
