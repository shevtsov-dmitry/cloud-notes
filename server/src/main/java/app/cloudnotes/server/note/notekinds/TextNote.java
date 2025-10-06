package app.cloudnotes.server.note.notekinds;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TextNote extends Note {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

}
