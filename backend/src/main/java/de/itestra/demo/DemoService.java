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
        DemoEntity entity = new DemoEntity();
        entity.setValue(dto.getValue());
        DemoEntity savedEntity = repository.save(entity);
        return toDto(savedEntity);
    }

    public DemoDTO update(final Long id, final DemoDTO dto) {
        // TODO implement
        DemoEntity entity = repository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Entity with ID " + id + " not found"));
        entity.setValue(dto.getValue());
        DemoEntity updatedEntity = repository.save(entity);
        return toDto(updatedEntity);
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
