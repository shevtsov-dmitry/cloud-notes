package app.cloudnotes.server.note;

import java.util.List;

import lombok.Data;

@Data
public abstract class Note {

  String title;
  String textContent;
  List<CustomNoteTag> tags;

}
