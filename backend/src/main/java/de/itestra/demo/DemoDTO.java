package de.itestra.demo;

import jakarta.validation.constraints.NotNull;

public class DemoDTO {
    
    private Long id;
    
    @NotNull
    private String value;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getValue() {
        return value;
    }
    public void setValue(String value) {
        this.value = value;
    }
}
