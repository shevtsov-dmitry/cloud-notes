package app.cloudnotes.server.user;

import java.util.List;

import app.cloudnotes.server.note.CustomNoteTag;
import app.cloudnotes.server.note.Note;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String username;
  @Column(nullable = false)
  private String email;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private List<Note> notes;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private List<CustomNoteTag> customNoteTags;

}
