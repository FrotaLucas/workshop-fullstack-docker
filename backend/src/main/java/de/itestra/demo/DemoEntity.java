package de.itestra.demo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class DemoEntity {
    
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String value;

    public DemoEntity() {
    }

    public DemoEntity(final Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(final String value) {
        this.value = value;
    }
}
