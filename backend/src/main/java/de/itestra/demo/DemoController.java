package de.itestra.demo;

import java.util.List;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@RestController
@Validated
public class DemoController {

    private final DemoService service;

    public DemoController(final DemoService service) {
        this.service = service;
    }

    //rota para teste. Nao esta funcionando
    @Valid
    @GetMapping("/test")
    public DemoDTO getTest() {
        System.out.println("Endpoint /test accessed!"); 
        return new DemoDTO(10L, "test");
    }

    //http://localhost:8080/list/elements ta retornando sempre [] mesmo se o enpoint for comentado
    
    // @Valid
    // @GetMapping("/list/elements")
    // public List<DemoDTO> getListElements() {
    //     //test
    //     System.out.println("Endpoint /test accessed!"); 
    //     DemoDTO ob = new DemoDTO(10L, "tst");
    //     return List.of(ob);

    //    return this.service.loadAll();
    // }

    @Valid
    @PostMapping("/list/create")
    public DemoDTO createListElement(
            @RequestBody @Validated final DemoDTO demoDTO) {
        // TODO implement
        return this.service.create(demoDTO);
    }

    @Valid
    @PatchMapping("/list/update/{id}")
    public DemoDTO updateListElement(
            @PathVariable("id") @NotNull final Long id,
            @RequestBody @Validated final DemoDTO demoDTO) {
        // TODO implement
        return this.service.update(id, demoDTO);
    }

    @DeleteMapping("/list/delete/{id}")
    public void deleteListElement(
            @PathVariable("id") @NotNull final Long id) {
        // TODO implement
        this.service.delete(id);
    }

}
