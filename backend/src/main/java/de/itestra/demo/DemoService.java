package de.itestra.demo;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class DemoService {
    private final DemoRepository repository;

    public DemoService(final DemoRepository repository) {
        this.repository = repository;
    }

    public List<DemoDTO> loadAll() {
        return this.repository.findAll().stream()
        .map(this::toDto)
        .toList();
    }

    public DemoDTO create(final DemoDTO dto) {
        // TODO implement
        return null;
    }

    public DemoDTO update(final Long id, final DemoDTO dto) {
        // TODO implement
        return null;
    }

    public void delete(final Long id) {
        // TODO implement
    }

    private DemoDTO toDto(final DemoEntity entity) {
        final var dto = new DemoDTO();
        dto.setId(entity.getId());
        dto.setValue(entity.getValue());
        return dto;
    }
}
