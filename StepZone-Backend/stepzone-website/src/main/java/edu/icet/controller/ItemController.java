package edu.icet.controller;

import edu.icet.dto.Item;
import edu.icet.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/item")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService service;

    @GetMapping("/get-all")
    public List<Item> getAll() {
        return service.getAll();
    }

    @PostMapping("/add")
    public void addItem(@RequestBody Item item) {
        service.addItem(item);
    }

    @PutMapping("/update")
    public void updateItem(@RequestBody Item item) {
        service.updateItem(item);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteItem(@PathVariable Integer id) {
        service.deleteItem(id);
    }
}
