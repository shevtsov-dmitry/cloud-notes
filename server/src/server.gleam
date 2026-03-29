import ewe
import gleam/erlang/process
import gleam/http/request
import gleam/http/response
import requests_manager

pub fn main() -> Nil {
  let assert Ok(_) =
    ewe.new(requests_manager.handler)
    |> ewe.bind("0.0.0.0")
    |> ewe.listening(8000)
    |> ewe.start()

  process.sleep_forever()
}
