package de.itestra.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;

public class DemoDTO {
    
    private Long id;
    
    @NotNull
    private String value;
    
    public DemoDTO(Long id, String value) {
        this.id = id;
        this.value = value;
    }
    //emppty constructor to method toDto in DemoService
    public DemoDTO(){
    }
    
    // @JsonProperty("id") 
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    // @JsonProperty("value")
    public String getValue() {
        return value;
    }
    public void setValue(String value) {
        this.value = value;
    }
}
