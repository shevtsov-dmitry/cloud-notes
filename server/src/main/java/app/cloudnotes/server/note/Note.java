package app.cloudnotes.server.note;

import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String textContent;
    @OneToMany(mappedBy = "note_id")
    private List<CustomNoteTag> tags;
    private String imageUrl;
    private String videoUrl;

}
