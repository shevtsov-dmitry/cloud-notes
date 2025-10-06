package app.cloudnotes.server.note;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class CustomNoteTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

    private String colorHEX;

    public void setRandomHEXColor() {
        this.colorHEX = "#" + Integer.toHexString((int) (Math.random() * 16777215)).substring(2, 8);
    }


}
