package app.cloudnotes.server.note.api.v0;

import app.cloudnotes.server.note.Note;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@Transactional
@AutoConfigureMockMvc
class TextNoteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private static final String DOMAIN_URL = "http://localhost:8080";
    private static final String API_PATH = DOMAIN_URL + "/api/v0/notes";

    @Test
    void createTextNote_verifyItWasSaved() throws Exception {
        Note note = new Note();
        note.setTitle("Sample Title");
        note.setTextContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.");

        MockHttpServletResponse response = mockMvc.perform(post(API_PATH + "/new")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(note)))
                .andExpect(status().isOk())
                .andExpect(result ->
                        assertThat(result.getResponse().getContentAsString())
                                .asInt()
                                .isPositive())
                .andReturn().getResponse();

        Long id = objectMapper.readValue(response.getContentAsString(), Long.class);

        mockMvc.perform(get(API_PATH + "/by/ids")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(List.of(id))))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").isNumber())
                .andExpect(jsonPath("$.title").value(note.getTitle()))
                .andExpect(jsonPath("$.textContent").value(note.getTextContent()));
    }

    @Test
    void createTextNote_deleteIt_checkItIsNotPresentInDB() throws Exception {
        Note note = new Note();
        note.setTitle("New Title");
        note.setTextContent("Example message content for text note test case.");

        MockHttpServletResponse response = mockMvc.perform(post(API_PATH + "/new")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(note)))
                .andExpect(status().isOk())
                .andExpect(result ->
                        assertThat(result.getResponse().getContentAsString())
                                .asInt()
                                .isPositive())
                .andReturn().getResponse();

        Long id = objectMapper.readValue(response.getContentAsString(), Long.class);

        mockMvc.perform(delete(API_PATH)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(List.of(id))))
                .andExpect(status().isNoContent());

        mockMvc.perform(get(API_PATH + "/by/ids")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(List.of(id))))
                .andExpect(status().isNotFound());

    }
}