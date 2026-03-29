import gleam/option

pub type Note {
  Note(
    id: Int,
    title: String,
    body: String,
    tags: List(String),
    created_at: String,
  )
}
